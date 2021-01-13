import React, { useEffect } from 'react';
import * as ml5 from 'ml5';
import p5 from 'p5';
import { Button, message, Steps } from 'antd';
const { Step } = Steps;

function MLClassification() {

    //Constants
    const STATES = {
        CLASSIFICATION: 'classification',
        TRAINING: 'training',
        PREDICTION: 'prediction'
    }


    const p5ref = React.useRef(null);
    let targetLabel = 'C'
    let model;
    let validInputs = new Set();
    let currentState = STATES.CLASSIFICATION;
    let myP5;
    const [currentStep, setCurrentStep] = React.useState(0);
    const initialButtonStates = {
        collectionState: false,
        trainingState: false
    }
    const [buttonStates, setButtonStates] = React.useState(initialButtonStates);

    
    useEffect(() => {
        if (!p5ref) return;
        myP5 = new p5(MLClassifier, p5ref.current);
    }, [])


    function whileTraining(epoch, loss) {
        console.log(`Epoch: ${epoch}`);
        console.table(loss)
        
    }

    function finishedTraining() {
        console.log('finished training');
        currentState = STATES.PREDICTION
        setButtonStates({ trainingState: true, collectionState: false })
        setCurrentStep(2);
    }

    function resetModel() {
        currentState = STATES.CLASSIFICATION;
        setCurrentStep(0);
        validInputs.clear();
        if (myP5) {
            myP5.clear();
            myP5.background(245);
            let options = {
                inputs: ['x', 'y'],
                outputs: ['label'],
                task: currentState,
                debug: true
            }
            model = ml5.neuralNetwork(options);
        }
    }

    function startTraining() {
        const errorMsg = () => {
            message.error('Multiple distinct data inputs required. Add more labels');
        }

        console.log(model);

        if (model && validInputs.size >= 2) {
            setCurrentStep(1);
            currentState = STATES.TRAINING;
            model.normalizeData();
            let options = {
                epochs: 100
            }
            setButtonStates({ collectionState: true, trainingState: true })
            model.train(options, whileTraining, finishedTraining);
        } else {
            errorMsg();
        }
    }

    function gotResults(error, results) {
        if (error) {
            console.error(error);
            return;
        }
        myP5.stroke(0);
        myP5.fill(0, 0, 255, 100);
        myP5.ellipse(myP5.mouseX, myP5.mouseY, 24);
        myP5.fill(0);
        myP5.noStroke();
        myP5.textAlign(myP5.CENTER, myP5.CENTER);
        myP5.text(results[0].label, myP5.mouseX, myP5.mouseY);
    }

    function MLClassifier(p) {
        p.setup = () => {
            let cnv = p.createCanvas(p5ref.current.offsetWidth, p5ref.current.offsetHeight);
            // cnv.parent('model-canvas');
            let options = {
                inputs: ['x', 'y'],
                outputs: ['label'],
                task: currentState,
                debug: true
            }
            model = ml5.neuralNetwork(options);
            p.background(245);

            cnv.mousePressed(mouseClickInCanvas);
        }

        p.keyPressed = () => {
            targetLabel = p.key.toUpperCase();
        }

        function mouseClickInCanvas() {

            let inputs = {
                x: p.mouseX,
                y: p.mouseY
            }

            if (currentState === STATES.CLASSIFICATION) {

                let target = {
                    label: targetLabel
                }
                validInputs.add(targetLabel);
                model.addData(inputs, target);
                console.log(validInputs);
                p.stroke(0);
                p.noFill();
                p.ellipse(p.mouseX, p.mouseY, 24);
                p.fill(0);
                p.noStroke();
                p.textAlign(p.CENTER, p.CENTER);
                p.text(targetLabel, p.mouseX, p.mouseY);
            } else if (currentState === STATES.PREDICTION) {
                model.classify(inputs, gotResults);
            }
        }
    }


    return (
        <div className="page-layout-container">
            <h2 className="header-text">ML5 Classifier</h2>
            <p>This is a simple classifier implemented using ml5js which classifies groups of mouse input letters on the canvas and trains a model using the input dataset. The model will then
            be able to predict the letter of the next input mouse click on the canvas.
            </p>
            <Steps current={currentStep} >
                <Step title="Data Collection" description="Start collecting data by inputing letters on the canvas below."></Step>
                <Step title="Training"  wqr3t description="Click the Train Model button to start training the model to recognize the inputs." />
                <Step title="Prediction" description="The model has been trained successfully. Click anywhere on the canvas again to see how the model has predicted
                the letter at each point." />
            </Steps>
            <div className="sorting-button-row">
                <Button
                    type="primary"
                    // size={isMobile ? "small" : "large"}
                    ghost
                    disabled={buttonStates.collectionState}
                    onClick={resetModel}
                >
                    Data Collection
                </Button>
                <Button
                    name="sort"
                    type="primary"
                    // size={isMobile ? "small" : "large"}
                    ghost
                    disabled={buttonStates.trainingState}
                    onClick={startTraining}
                >
                    Train Model
                </Button>
                {/* <Button
                    type="primary"
                    ghost
                    onClick={() => {
                        // console.log(validInputs);
                        // console.log(myP5);
                        if (model) {
                            console.log(model.neuralNetworkData.data);
                            console.log(myP5);
                        } else {
                            console.log("No model");
                        }
                        
                    }}
                >
                    Debug
                </Button> */}
            </div>
            <div id="model-canvas" className="p5-canvas" ref={p5ref}>

            </div>
        </div>
    )
}

export default MLClassification;