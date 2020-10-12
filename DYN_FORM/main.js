function dynForm(arr){
    let form = document.createElement('form');
    document.body.append(form);
    for(let i in arr){
        let leb = document.createElement('label');
        form.append(leb);
        let span = document.createElement('span');
        span.append(arr[i].label);
        let input = document.createElement('input');
        input.setAttribute('name', arr[i].name);
        leb.classList.add('label-class');
        leb.append(span);
        span.classList.add('left-col')
        if(arr[i].kind === 'submit'){
            input.setAttribute('type', 'submit');
            input.setAttribute('value', arr[i].label);
        }
        switch (arr[i].kind){
            case 'longtext':
                leb.append(input);
                input.classList.add('right-col');
                break;
            case 'number':
                leb.append(input);
                input.classList.add('right-col-num');
                input.setAttribute('type', 'number');
                break;
            case 'shorttext':
                leb.append(input);
                input.classList.add('right-col-short');
                break;
            case 'combo':
                let select = document.createElement('select');
                leb.append(select);
                for (let j = 0; j < arr[i].variants.length; j++){
                    let option = document.createElement('option');
                    select.append(option);
                    option.append(arr[i].variants[j].text);
                    option.setAttribute('value', arr[i].variants[j].value);
                };
                break;
            case 'radio':
                for (let j = 0; j < arr[i].variants.length; j++){
                    let inputRadio = document.createElement('input');
                    leb.append(inputRadio);
                    inputRadio.after(arr[i].variants[j].text);
                    inputRadio.setAttribute('type', 'radio');
                    inputRadio.setAttribute('value', arr[i].variants[j].value);
                    inputRadio.setAttribute('name', 'payment');  
                };
                break;
            case 'check':
                leb.append(input);
                input.setAttribute('type', 'checkbox');
                break;
            case 'memo':
                let textarea = document.createElement('textarea');
                leb.classList.add('label-class-textarea');
                leb.append(textarea);
                textarea.classList.add('textarea');
                textarea.setAttribute('rows', 4);
                break;
            case 'submit':
                leb.removeChild(span);
                leb.append(input);
                break;
        }  
    }
}


let formDef1=
[
  {label:'Название сайта:',kind:'longtext',name:'sitename'},
  {label:'URL сайта:',kind:'longtext',name:'siteurl'},
  {label:'Посетителей в сутки:',kind:'number',name:'visitors'},
  {label:'E-mail для связи:',kind:'shorttext',name:'email'},
  {label:'Рубрика каталога:',kind:'combo',name:'division',
    variants:[{text:'здоровье',value:1},{text:'домашний уют',value:2},{text:'бытовая техника',value:3}]},
  {label:'Размещение:',kind:'radio',name:'payment',
    variants:[{text:'бесплатное',value:1},{text:'платное',value:2},{text:'VIP',value:3}]},
  {label:'Разрешить отзывы:',kind:'check',name:'votes'},
  {label:'Описание сайта:',kind:'memo',name:'description'},
  {label:'Опубликовать:',kind:'submit'},
];

let formDef2=
[
  {label:'Фамилия:',kind:'longtext',name:'lastname'},
  {label:'Имя:',kind:'longtext',name:'firstname'},
  {label:'Отчество:',kind:'longtext',name:'secondname'},
  {label:'Возраст:',kind:'number',name:'age'},
  {label:'Зарегистрироваться:',kind:'submit'},
];

dynForm(formDef1);
dynForm(formDef2);