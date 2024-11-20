import * as flsWebpFunction from './modules/webfunctions.js';
import ibg from './modules/ibg.js';
import { burger } from './modules/burger.js';
import { slickHeader } from './modules/slick-header.js';
import { carousel } from './modules/sliders.js';
import { ItcCustomSelect } from './modules/itc-custom-select.js';
import { counter } from './modules/counter.js';

counter()
setTimeout(() => {
    burger();
    carousel();
}, 200);


ItcCustomSelect.hideOpenSelect();


const selects = document.querySelectorAll('.select');
const selectObj = {}
let i = 0;
let selectOptions = []
let targetValue = ''
let name = ''
selects.forEach(select => {

})

selects.forEach(select => {
    select.querySelectorAll('li').forEach((item) => {
        selectOptions.push([item.dataset.value, item.innerHTML]);
        if(item.classList.contains('select__option_selected')) {
            targetValue = item.dataset.value;
        }
    })
    name = select.querySelector('button').dataset.name;
    selectObj[`select${i++}`] = new ItcCustomSelect(select, {
        name: name,
        targetValue: targetValue,
        options: selectOptions, // опции
    });
    selectOptions = []
})

console.log(selectObj);


slickHeader();
ibg();
flsWebpFunction.isWebp();


