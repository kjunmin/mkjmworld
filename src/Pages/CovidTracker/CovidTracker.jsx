import React, { useEffect, useCallback, useState } from 'react';
import axios from 'axios';
import { Radio, Slider, Statistic } from 'antd';
import { ResponsiveChoropleth } from '@nivo/geo';
import { throttle } from 'lodash';
import countries from "./world_countries.json";

function CovidTracker() {
    const covidApiUrl = "https://api.covid19api.com/summary";
    const [covidData, setCovidData] = useState([]);
    const [globalCovidData, setGlobalCovidData] = useState([]);
    const [cloroplethSelection, setCloroplethSelection] = useState("TotalConfirmed");
    const [ready, setReady] = useState(false);
    const [scaleMaxVal, setScaleMaxVal] = useState();
    const [projectionVal, setProjectionVal] = useState(100);
    const [x, setX] = useState(0.5);
    const [y, setY] = useState(0.5);

    const inputEl = useCallback(node => {

        if (node !== null) {
            node.addEventListener('wheel', handleScrollToZoom, { passive: false })
            return () => {
                node.removeEventListener('wheel', handleScrollToZoom);
            }
        }
    }, []);

    const loadApiData = async () => {
        const response = await axios.get(covidApiUrl);
        let countriesData = response.data.Countries;
        const amounts = countriesData.map((a) => a.[cloroplethSelection])
        const highestAmount = Math.max(...amounts);
        setScaleMaxVal(highestAmount);
        const output = countriesData.map(countryData => {
            let feature = countries.features.find(({ properties }) => properties.name === countryData.Country);
            if (feature) {
                return {
                    id: feature.id,
                    value: countryData.[cloroplethSelection]
                }
            }
            return undefined;
        }).filter(item => item !== undefined)
        setCovidData(output);
        setGlobalCovidData(response.data.Global)

        setReady(true);
    }

    const handleCholoplethSelection = e => {
        const newSelection = e.target.value;
        console.log(newSelection)
        setCloroplethSelection(newSelection);
    }

    const handleScrollToZoom = (event) => {
        event.preventDefault();

        throttle(event => {
            if (event.wheelDelta > 0 && projectionVal < 400) {
                setProjectionVal(prev => Math.min(prev + 5, 400));
            } else if (event.wheelDelta < 0 && projectionVal > 50) {
                setProjectionVal(prev => Math.max(prev - 5, 100));
            }
        }, 500)(event);

    }

    const handleXTranslation = value => {
        setX(value);
    };

    const handleYTranslation = value => {
        setY(value);
    };

    const handleZoomTranslation = value => {
        setProjectionVal(value);
    };

    useEffect(() => {
        setReady(false)
        loadApiData();
    }, [cloroplethSelection])

    const CovidTrackerGraph = ({ data }) => (
        <ResponsiveChoropleth
            data={data}
            features={countries.features}
            margin={{ top: 0, right: 0, bottom: 0, left: 0 }}
            colors="YlGnBu"
            domain={[0, scaleMaxVal]}
            unknownColor="#666666"
            label="properties.name"
            valueFormat=".2s"
            projectionScale={projectionVal}
            projectionTranslation={[x, y]}
            projectionRotation={[-10, 0, 0]}
            enableGraticule={true}
            graticuleLineColor="#dddddd"
            borderWidth={0.5}
            borderColor="#152538"
            legends={[
                {
                    anchor: 'bottom-left',
                    direction: 'column',
                    justify: true,
                    translateX: 20,
                    translateY: -100,
                    itemsSpacing: 0,
                    itemWidth: 94,
                    itemHeight: 18,
                    itemDirection: 'left-to-right',
                    itemTextColor: '#444444',
                    itemOpacity: 0.85,
                    symbolSize: 18,
                    effects: [
                        {
                            on: 'hover',
                            style: {
                                itemTextColor: '#000000',
                                itemOpacity: 1
                            }
                        }
                    ]
                }
            ]}
        />
    )

    return (
        <div className="page-container">
            <h1 className="header-text">Covid Choropleth</h1>
            <div className="stats-container">
                <Statistic title="New Confirmed" value={globalCovidData.NewConfirmed} />
                <Statistic title="Total Confirmed" value={globalCovidData.TotalConfirmed} />
                <Statistic title="New Deaths" value={globalCovidData.NewDeaths} />
                <Statistic title="Total Deaths" value={globalCovidData.TotalDeaths} />
                <Statistic title="Total Recovered" value={globalCovidData.TotalRecovered} />
            </div>
            <div className="cloropleth-selection-container">
                <Radio.Group>
                    <Radio.Button value="TotalConfirmed" onChange={handleCholoplethSelection}>Total Confirmed</Radio.Button>
                    <Radio.Button value="NewConfirmed" onChange={handleCholoplethSelection}>New Confirmed</Radio.Button>
                    <Radio.Button value="NewDeaths" onChange={handleCholoplethSelection}>New Deaths</Radio.Button>
                    <Radio.Button value="TotalDeaths" onChange={handleCholoplethSelection}>Total Deaths</Radio.Button>
                    <Radio.Button value="NewRecovered" onChange={handleCholoplethSelection}>New Recovered</Radio.Button>
                    <Radio.Button value="TotalRecovered" onChange={handleCholoplethSelection}>Total Recovered</Radio.Button>
                </Radio.Group>
            </div>
            {ready ?
                <div className="display-container">
                    <Slider vertical min={0} max={1} step={0.01} onChange={handleYTranslation} value={y} />
                    <div ref={inputEl} className="graph-display">
                        <CovidTrackerGraph data={covidData} />
                        <Slider min={0} max={1} step={0.01} onChange={handleXTranslation} value={x} />
                        <Slider min={100} max={400} step={1} onChange={handleZoomTranslation} value={projectionVal} />

                    </div>
                </div>
                : <h1>Loading...</h1>
            }

        </div>
    )
}
export default CovidTracker;