let inps = document.querySelectorAll('#Need')
let h6 = document.querySelectorAll('h6')

inps.forEach(btn => {
    btn.onblur = () => {
        if (btn.value.length === 0) {
            btn.style.border = '2px solid red'
            
        } else {
            btn.style.border = '2px solid green'
        }
    }
})


inps.forEach(btn => {
    btn.onfocus = () => {
        btn.style.border = '2px solid #543FD3'
    }
})

