import React from 'react';
import '../../../css/styles.scss';
import JumbotronSplash from './JumbotronSplash';

function Jumbotron() {
    return (
        <div className="jumbotron">
            <div className="jumbotron-text-container">
                <div className="jumbotron-main-text">
                    <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1058.18555 112.83154">
                        <path d="M102.08789,115.84668l-.28809-53.42383L75.87988,105.91113H63.208L37.43213,63.86279v51.98389h-26.352V15.04688H34.55176L69.97607,73.22266l34.56006-58.17578h23.47168l.28809,100.7998Z" transform="translate(-7.08008 -9.03076)" fill="none" stroke="#b6b6b6" strokeMiterlimit="10" strokeWidth="6" />
                        <path d="M187.335,79.27051l-10.65576,11.376v25.2002H148.45508V15.04688H176.6792v41.9038l39.02393-41.9038h31.39208L205.91113,59.68652l43.34375,56.16016H216.13477Z" transform="translate(-7.08008 -9.03076)" fill="none" stroke="#b6b6b6" strokeMiterlimit="10" strokeWidth="6" />
                        <path d="M258.61523,114.04688a36.92411,36.92411,0,0,1-14.832-11.01563L259.335,84.59863q8.06323,10.51319,17.42432,10.5127,6.18969,0,9.43164-3.74414,3.24023-3.74341,3.24023-10.94434V37.07861H254.583V15.04688h63.07226V78.69482q0,19.58569-9.86425,29.37549-9.865,9.79542-29.01612,9.792A51.5327,51.5327,0,0,1,258.61523,114.04688Z" transform="translate(-7.08008 -9.03076)" fill="none" stroke="#b6b6b6" strokeMiterlimit="10" strokeWidth="6" />
                        <path d="M427.958,115.84668l-.28809-53.42383L401.75,105.91113H389.07813L363.30225,63.86279v51.98389H336.9502V15.04688h23.47168l35.42431,58.17578,34.56006-58.17578h23.47168l.28809,100.7998Z" transform="translate(-7.08008 -9.03076)" fill="none" stroke="#b6b6b6" strokeMiterlimit="10" strokeWidth="6" />
                        <path d="M632.14941,15.04688l-32.68847,100.7998H568.93262l-19.2959-61.34424-20.16016,61.34424H498.94922l-32.688-100.7998h29.37549l20.30469,64.36767,21.31152-64.36767h26.208l20.30371,64.94384,21.168-64.94384Z" transform="translate(-7.08008 -9.03076)" fill="none" stroke="#b6b6b6" strokeMiterlimit="10" strokeWidth="6" />
                        <path d="M663.18164,111.09473a50.45467,50.45467,0,0,1-27.28711-45.64795,50.45464,50.45464,0,0,1,27.28711-45.648,64.35413,64.35413,0,0,1,57.45606,0,50.4531,50.4531,0,0,1,27.28808,45.648,50.45313,50.45313,0,0,1-27.28808,45.64795,64.35838,64.35838,0,0,1-57.45606,0Zm42.55274-20.44825a25.89614,25.89614,0,0,0,9.792-10.15185A30.74755,30.74755,0,0,0,719.126,65.44678a30.7614,30.7614,0,0,0-3.59961-15.04834,25.92873,25.92873,0,0,0-9.792-10.15186,28.34224,28.34224,0,0,0-27.64844,0,25.8884,25.8884,0,0,0-9.792,10.15186,30.7398,30.7398,0,0,0-3.59961,15.04834A30.726,30.726,0,0,0,668.294,80.49463a25.85592,25.85592,0,0,0,9.792,10.15185,28.34561,28.34561,0,0,0,27.64844,0Z" transform="translate(-7.08008 -9.03076)" fill="none" stroke="#b6b6b6" strokeMiterlimit="10" strokeWidth="6" />
                        <path d="M806.96484,89.0625H791.41309v26.78418H762.90137V15.04688h46.08008q13.67871,0,23.75976,4.53564a34.15156,34.15156,0,0,1,21.02442,32.76025,35.11826,35.11826,0,0,1-5.11231,19.08008A34.57351,34.57351,0,0,1,834.03711,84.1665l21.74414,31.68018H825.25293ZM820.501,41.39844q-4.46486-3.8877-13.24805-3.8877H791.41309v29.52h15.83984q8.78174,0,13.24805-3.81592,4.46191-3.81372,4.46386-10.87207Q824.96484,45.28883,820.501,41.39844Z" transform="translate(-7.08008 -9.03076)" fill="none" stroke="#b6b6b6" strokeMiterlimit="10" strokeWidth="6" />
                        <path d="M869.46,15.04688h28.51172v78.1914h48.09668v22.6084H869.46Z" transform="translate(-7.08008 -9.03076)" fill="none" stroke="#b6b6b6" strokeMiterlimit="10" strokeWidth="6" />
                        <path d="M957.29785,15.04688h47.66406q16.55714,0,29.376,6.19189A46.66485,46.66485,0,0,1,1054.21,38.80664q7.05323,11.37744,7.05567,26.64014,0,15.26514-7.05567,26.64013a46.632,46.632,0,0,1-19.87207,17.56739q-12.81885,6.19335-29.376,6.19238H957.29785Zm46.51172,78.04785q12.96094,0,20.80859-7.34424,7.8457-7.344,7.84766-20.30371,0-12.96021-7.84766-20.3042-7.85155-7.344-20.80859-7.34375h-18v55.2959Z" transform="translate(-7.08008 -9.03076)" fill="none" stroke="#b6b6b6" strokeMiterlimit="10" strokeWidth="6" />
                    </svg>
                </div>
                <p className="jumbotron-sub-text">An experiment in building a modern fully functional Web Application.</p>
                <div className="jumbotron-splash-container">
                    <JumbotronSplash />
                </div>
            </div>
        </div>
    )
}

export default Jumbotron;