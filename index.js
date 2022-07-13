function checkvalue() {
    let num = document.querySelector("#numCheck").value;

    if (num % 2 === 0) {
        document.querySelector("#result")
        .innerHTML = ' Is an even number ';
    } else  {
        document.querySelector("#result")
        .innerHTML = '  Is an odd number ' ;
    }
}