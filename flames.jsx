
export function Flames(){
    let allData = JSON.parse(localStorage.getItem('flamesData')) || []; // Load existing data or initialize an empty array
    function saveDataLocally(data) {
        <h1>hiii</h1>
        // Add new data to the allData array
        allData.push(data);
    
        // Save updated data back to localStorage
        localStorage.setItem('flamesData', JSON.stringify(allData));
        console.log("Data saved successfully! Current data:", allData);
    }
    function check1(){
        let s = document.getElementById("s").value.toUpperCase().split(' ').join('');
        let r = document.getElementById("r").value.toUpperCase().split(' ').join('');
        const regex = /[^A-Za-z]/;       
        if(regex.test(s)||regex.test(r))    
        alert("enter valid name!")
        else
        check2(s,r)
    }
    function check2(s,r) {
       
        console.log(s)
        console.log(r)
        let img=document.getElementById("image")
        let h = Array.from(s);
        let l = Array.from(r);
    
        // Remove common characters
        for (let i of [...h]) {
            for (let j of l) {
                if (i === j) {
                    h.splice(h.indexOf(i), 1);
                    l.splice(l.indexOf(j), 1);
                    break;
                }
            }
        }
    
        // Calculate the total remaining characters
        const n = h.length + l.length;
    
        let flames = ["friends", "lovers", "attraction", "marriage", "enemies", "sister"];
    
        // Determine FLAMES result
        for (let i = 6; i > 1; i--) {
            let p = n % i;
            if (p === 0) {
                p = i;
            }
            flames.splice(p - 1, 1);
        }
    
        const relation = flames[0];
        // Save the data locally
        img.src = `flames_images/${relation}.jpg`;
        saveDataLocally({ name: s, loverName: r, relation });
        
    
    }
    
    return <>
    <h1>FLAMES</h1>
    <div>
        
        <label>Enter your name :</label>
        <input type="text" id="s"></input><br></br>
        <br></br>
        <label>Enter your lover name :</label>
        <input type="text" id="r"></input>
        <br></br>
        <br></br>
        <button onClick={check1} >check</button>
    </div>
        <img src="" id="image"></img>
    </>

}