
const requestURL = 'data/rental.json';

fetch(requestURL)
      .then(function (response) {
        return response.json();
        
      })
      .then(function (jsonObject) {
          // temporary checking for valid response and data parsing
        const rentals = jsonObject['rentals'];
        

        
        for (let j = 0; j < rentals.length; j++ ) {
            
            
            let card = document.createElement('div');
            
            let h2 = document.createElement('h3');
            h2.textContent = rentals[j].name;
            card.appendChild(h2);
            let br = document.createElement('br');
            card.appendChild(br);
            let image = document.createElement('img');
            image.setAttribute('src', '/scoots/images/'+ rentals[j].photo);
            image.setAttribute('alt', rentals[j].name  );
            card.appendChild(image);
            
            let p1 = document.createElement('p');
            p1.textContent = 'Max Persons: ' + rentals[j].maxpersons;
            card.appendChild(p1);

            let table = document.createElement('table');
            let tr1 = document.createElement('tr');
            let th1 = document.createElement('th');
            th1.textContent = "Reservation";
            th1.colSpan = "2";
            tr1.appendChild(th1);
            let th2 = document.createElement('th');
            th2.textContent = "Walk-in";
            th2.colSpan = "2";
            tr1.appendChild(th2);
            let tr2 = document.createElement('tr');
            let th3 = document.createElement('th');
            th3.textContent = "Half-Day";
            let th5 = document.createElement('th');
            th5.textContent = "Half-Day";
            tr2.appendChild(th5);
            let th4 = document.createElement('th');
            th4.textContent = "Full Day";
            let th6 = document.createElement('th');
            th6.textContent = "Full Day";
            tr2.appendChild(th4);
            tr2.appendChild(th6);
            tr2.appendChild(th3);
            tr2.appendChild(th4);
            let tr3 = document.createElement('tr');
            let td1 = document.createElement('td');
            td1.textContent = '$' + rentals[j].prices[0].reservation[0].halfday;
            let td2 = document.createElement('td');
            td2.textContent = '$' + rentals[j].prices[0].reservation[0].fullday;
            let td3 = document.createElement('td');
            td3.textContent = '$' + rentals[j].prices[0].walkin[0].halfday;
            let td4 = document.createElement('td');
            td4.textContent = '$' + rentals[j].prices[0].walkin[0].fullday;
            tr3.appendChild(td1);
            tr3.appendChild(td2);
            tr3.appendChild(td3);
            tr3.appendChild(td4);
            table.appendChild(tr1);
            table.appendChild(tr2);
            table.appendChild(tr3);

            
            
            card.appendChild(table);
            
            document.querySelector('div.rentalcard').appendChild(card);
        };
        
      });