// console.log('Ami achi vai');
const callHistory = [];
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

for (let btn of callBtn) {
    btn.addEventListener('click', function () {

        const coinEl = document.getElementById('coin');
        let coin = parseInt(coinEl.innerText);

        if(coin < 19){
            alert('🚨🚨🚨You cannot make calls! Dont have Enought Coin🚨🚨🚨')
            return;
        }
        
        const parent = btn.closest('.service-card');
        const service = parent.querySelector('.services').innerText;
        const number = parent.querySelector('.number').innerText;

        alert('📞.. Calling ' + service + ' ' + number);

        const newCoin = coin - 20;
        coinEl.innerText = newCoin;

        //History section

        const data = {
            name:service,
            number: number,
            date: new Date().toLocaleTimeString()
        }
        callHistory.push(data);
        const callHistoryContainer = document.getElementById('call-history');
        callHistoryContainer.innerText = "";
        for(let data of callHistory){
            const div = document.createElement('div');
            div.innerHTML = `

            <div class="flex justify-between items-center mx-4 mt-3 bg-[#fafafa] shadow rounded-lg p-2">
                    <div id="clear">
                        <h1 class="font-semibold">${data.name}</h1>
                        <h1>${data.number}</h1>
                    </div>
                    <h3>${data.date}</h3>
                </div>
            `

            callHistoryContainer.appendChild(div);

            //Clear button work

            document.getElementById('clear-btn').addEventListener('click', function(){
               div.innerText = '';
            })
   
            
        }
       



        
        
        
    });
    
}
 // Copy Button work


       const copyBtns = document.querySelectorAll('.copy-btn');
const copyCounterEl = document.getElementById('copy-counter');

for (let btn of copyBtns) {
    btn.addEventListener('click', function () {
        const parent = btn.closest('.service-card');
        const number = parent.querySelector('.number').innerText;

        navigator.clipboard.writeText(number).then(() => {
            // increase counter
            let count = parseInt(copyCounterEl.innerText);
            count++;
            copyCounterEl.innerText = count;

            alert('✅ Number copied: ' + number);
        }).catch(err => {
            console.error('❌ Failed to copy: ', err);
        });
    });
}
