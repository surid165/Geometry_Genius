function getInputFieldValueById(inputFieldId){
    const inputField = document.getElementById(inputFieldId);
    const inputFieldValueString = inputField.value;
    const inputFieldValue = parseFloat(inputFieldValueString);
    return inputFieldValue;

}

function addToCalculationEntry(areaType, area){
    // console.log(areaType+ ' ' + area)
    const calculationEntry = document.getElementById('area-calculator');
    const count = calculationEntry.childElementCount;
    const p = document.createElement('p');
    p.innerHTML = `${count + 1} ${areaType} ${area}cm<sup>2</sup>
    <button class="w-32 ml-3 h-8 bg-sky-300 font-medium text-white rounded hover:bg-blue-700">Convert to m<sup>2</sup></button>`;
    p.classList.add('mx-auto','py-2');

    calculationEntry.appendChild(p);
}

document.getElementById('btn-blog').addEventListener('click',function(){
    window.open('blog.html');
})


document.getElementById('btn-calculate-triangle').addEventListener('click',function(){
    const triangleB =  getInputFieldValueById('b-tri');
    const triangleH =  getInputFieldValueById('h-tri');
    const area = (0.5 * triangleB * triangleH).toFixed(2);;
    if(typeof triangleB && triangleH !== 'number'){
        alert('Enter a Valid Number');
        return;
    }
    addToCalculationEntry('Triangle',area);   
     
})

document.getElementById('btn-calculate-rectangle').addEventListener('click',function(){

    const recW =  getInputFieldValueById('w-rec');
    const recL =  getInputFieldValueById('l-rec');
    const area = (recL * recW).toFixed(2);;
    if(typeof recL && recW !== 'number'){
        alert('Enter a Valid Number');
        return;
    }
    addToCalculationEntry('Rectangle',area);
})

document.getElementById('btn-calculate-parallelogram').addEventListener('click',function(){

    const paraB =  getInputFieldValueById('b-para');
    const paraH =  getInputFieldValueById('h-para');
    const area = (0.5 * paraB * paraH).toFixed(2);;
    if(typeof paraB && paraH !== 'number'){
        alert('Enter a Valid Number');
        return;
    }
    addToCalculationEntry('Parallelogram',area);

})

document.getElementById('btn-calculate-rhombus').addEventListener('click',function(){

    const rombD1 =  getInputFieldValueById('d1-romb');
    const rombD2 =  getInputFieldValueById('d2-romb');
    const area = (0.5 * rombD1 * rombD2).toFixed(2);;
    if(typeof rombD1 && rombD2 !== 'number'){
        alert('Enter a Valid Number');
        return;
    }
    addToCalculationEntry('Rhombus',area);

})

document.getElementById('btn-calculate-pentagon').addEventListener('click',function(){

    const pentP =  getInputFieldValueById('p-pent');
    const pentB =  getInputFieldValueById('b-pent');
    const area = (0.5 * pentP * pentB).toFixed(2);;
    if(typeof pentP && pentB !== 'number'){
        alert('Enter a Valid Number');
        return;
    }
    addToCalculationEntry('Pentagon',area);

})

document.getElementById('btn-calculate-ellipse').addEventListener('click',function(){

    const elipA =  getInputFieldValueById('a-elip');
    const elipB =  getInputFieldValueById('b-elip');
    const area = (3.14 * elipA * elipB).toFixed(2);;
    if(typeof elipA && elipB !== 'number'){
        alert('Enter a Valid Number');
        return;
    }
    addToCalculationEntry('Ellipse',area);

})