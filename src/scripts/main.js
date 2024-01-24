document.addEventListener('DOMContentLoaded', ()=>{
const inputFile = document.querySelector('#arquivo')
const pictureImg = document.querySelector('.Imagens')
inputFile.addEventListener('change', (e)=>{
    const inputTarget = e.target
    const file = inputTarget.files[0]
    if(file){
        const reader = new FileReader()
        reader.addEventListener('load',(e)=>{
            const readerTarget = e.target
            const div = document.createElement('div')
            const img = document.createElement('img')
            const span = document.createElement('span')
            img.src = readerTarget.result
            div.classList.add("Imagens_Div");
            img.classList.add("Imagens_Img");
            span.classList.add("Imagens_Span");
            let valor = (e.total / 1000).toFixed(2)
            span.innerHTML = ` Tamanho ${valor}kB`
            div.appendChild(img)
            div.appendChild(span)
            pictureImg.appendChild(div)
        })
        
        reader.readAsDataURL(file)
        console.log(file)
        alert("Arquivo adicionado com sucesso!")
    }else{
        alert("Adicione imagemaa")
    }
    
})
})