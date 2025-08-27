// console.log('Ami achi vai');

//Like Button Area

const likeBtn = document.querySelectorAll('.btn-like');
for( let btn of likeBtn){
    btn.addEventListener('click', function(){
        const likeArea = document.getElementById('like-area');
         let newLike =  parseInt(likeArea.innerText);
         newLike++;
         likeArea.innerText = newLike;
    })
}

// Call Button Area

const callBtn = document.querySelectorAll('.btn-call');
for( let btn of callBtn){
    btn.addEventListener('click', function(){
        alert(`Calling `);
    })
}
