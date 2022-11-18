

const tipAmoutBtns = Array.from(document.getElementsByClassName('tip-amt'))

tipAmoutBtns.forEach((btn) => {
    btn.addEventListener('click', () => {
        const tipPercentage = btn.dataset.percentage;
        calculateTip(tipPercentage)
    })
})



const calculateTip = (percentage) => {
    const bill = document.querySelector('#bill-total').value
    const persons = document.querySelector('#persons-total').value


    const tipAmountDisplay = document.querySelector('.tip-amount-display')
    const totalAmountDisplay = document.querySelector('.total-amount-display')


    if (!bill || !persons) return

    const totalTip = bill * percentage / 100
    const tipPerPerson = totalTip / persons


    tipAmountDisplay.innerHTML = `$ ${tipPerPerson}`
    totalAmountDisplay.innerHTML = `$ ${totalTip}`

}