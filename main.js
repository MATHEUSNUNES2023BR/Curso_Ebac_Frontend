document.addEventListener('DOMContentLoaded', (evt)=>{    
    evt.preventDefault()
    const imagem = document.querySelector('.profile-avatar')
    const name  = document.querySelector('.profile-name')
    const username = document.querySelector('.profile-username')
    const nrepos = document.querySelectorAll('.numbers-item h3')[0]
    const followers = document.querySelectorAll('.numbers-item h3')[1]
    const following = document.querySelectorAll('.numbers-item h3')[2]
    const github = document.querySelector('.profile-link')
    fetch('https://api.github.com/users/MATHEUSNUNES2023BR')
        .then((res)=>{
            return res.json()
        })
        .then((json)=>{
            if(json.message == 'Not Found'){
                alert('Repositório não encontrado')
                throw new Error('Repositório não econtrado');
            }else{
                imagem.src = json.avatar_url
                name.innerText  = json.name
                username.innerText = json.login
                followers.innerText = json.followers
                following.innerText = json.following
                nrepos.innerText = json.public_repos
                github.href = json.html_url
            }
        })
        
})