let insert = (num) => document.form.textview.value = document.form.textview.value + num;

let equal = () => document.form.textview.value = eval(document.form.textview.value);

let clean = () => document.form.textview.value = "";

let back = () => document.form.textview.value = (document.form.textview.value).substring(0, (document.form.textview.value).length-1);