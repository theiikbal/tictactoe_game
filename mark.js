        var i = 0;

        var a1 = 0, b1 = 0, c1 = 0;
        var a2 = 0, b2 = 0, c2 = 0;
        var a3 = 0, b3 = 0, c3 = 0;

        var r1 = 0, r2 = 0, r3 = 0;
        var cl1 = 0, cl2 = 0, cl3 = 0;
        var d1 = 0, d2 = 0;


        function mark1(){
            i +=1;
            if(i % 2 == 1){
                document.getElementById('box1').innerHTML = 'X';
                a1 += 1;
            }
            else{
                document.getElementById('box1').innerHTML = 'O';
                a1 -= 1;
            }   
            winLine_Winner()
            
        }
        

        function mark2(){
            i +=1;
            if(i % 2 == 1){
                document.getElementById('box2').innerHTML = 'X';
                b1 += 1;
            }
            else{
                document.getElementById('box2').innerHTML = 'O';
                b1 -= 1;
            }
            winLine_Winner()
            
        }

        function mark3(){
            i +=1;
            if(i % 2 == 1){
                document.getElementById('box3').innerHTML = 'X';
                c1 += 1;
            }
            else{
                document.getElementById('box3').innerHTML = 'O';
                c1 -= 1;
            }
            winLine_Winner()
            console.log(c1);
        }

        function mark4(){
            i +=1;
            if(i % 2 == 1){
                document.getElementById('box4').innerHTML = 'X';
                a2 += 1;
            }
            else{
                document.getElementById('box4').innerHTML = 'O';
                a2 -= 1;
            }
            winLine_Winner()
        }

        function mark5(){
            i +=1;
            if(i % 2 == 1){
                document.getElementById('box5').innerHTML = 'X';
                b2 += 1;
            }
            else{
                document.getElementById('box5').innerHTML = 'O';
                b2 -= 1;
            }
            winLine_Winner()
        }

        function mark6(){
            i +=1;
            if(i % 2 == 1){
                document.getElementById('box6').innerHTML = 'X';
                c2 += 1;
            }
            else{
                document.getElementById('box6').innerHTML = 'O';
                c2 -= 1;
            }
            winLine_Winner()
        }

        function mark7(){
            i +=1;
            if(i % 2 == 1){
                document.getElementById('box7').innerHTML = 'X';
                a3 += 1;
            }
            else{
                document.getElementById('box7').innerHTML = 'O';
                a3 -= 1;
            }
            winLine_Winner()
        }

        function mark8(){
            i +=1;
            if(i % 2 == 1){
                document.getElementById('box8').innerHTML = 'X';
                b3 += 1;
            }
            else{
                document.getElementById('box8').innerHTML = 'O';
                b3 -= 1;
            }
            winLine_Winner()
        }

        function mark9(){
            i +=1;
            if(i % 2 == 1){
                document.getElementById('box9').innerHTML = 'X';
                c3 += 1;
            }
            else{
                document.getElementById('box9').innerHTML = 'O';
                c3 -= 1;
            }
            winLine_Winner()
        }

        function winLine_Winner(){
            r1 = a1 + b1 + c1;
            r2 = a2 + b2 + c2;
            r3 = a3 + b3 + c3;
            cl1 = a1 + a2 + a3;
            cl2 = b1 + b2 + b3;
            cl3 = c1 + c2 + c3;
            d1 = a1 + b2 + c3;
            d2 = a3 + b2 + c1;
            if(r1 == 3){
                document.getElementById('line1').style.display = 'inline-block';
                document.getElementById('gameover').style.display = 'inline-block';
                document.getElementById('winner').innerHTML = 'Player X wins';
            }
            if(r2 == 3){
                document.getElementById('line2').style.display = 'inline-block';
                document.getElementById('gameover').style.display = 'inline-block';
                document.getElementById('winner').innerHTML = 'Player X wins';
            }
            if(r3 == 3){
                document.getElementById('line3').style.display = 'inline-block';
                document.getElementById('gameover').style.display = 'inline-block';
                document.getElementById('winner').innerHTML = 'Player X wins';
            }
            if(cl1 == 3){
                document.getElementById('line4').style.display = 'inline-block';
                document.getElementById('gameover').style.display = 'inline-block';
                document.getElementById('winner').innerHTML = 'Player X wins';
            }
            if(cl2 == 3){
                document.getElementById('line5').style.display = 'inline-block';
                document.getElementById('gameover').style.display = 'inline-block';
                document.getElementById('winner').innerHTML = 'Player X wins';
            }
            if(cl3 == 3){
                document.getElementById('line6').style.display = 'inline-block';
                document.getElementById('gameover').style.display = 'inline-block';
                document.getElementById('winner').innerHTML = 'Player X wins';
            }
            if(d1 == 3){
                document.getElementById('line8').style.display = 'inline-block';
                document.getElementById('gameover').style.display = 'inline-block';
                document.getElementById('winner').innerHTML = 'Player X wins';
            }
            if(d2 == 3){
                document.getElementById('line7').style.display = 'inline-block';
                document.getElementById('gameover').style.display = 'inline-block';
                document.getElementById('winner').innerHTML = 'Player X wins';
            }

            if(r1 == -3){
                document.getElementById('line1').style.display = 'inline-block';
                document.getElementById('gameover').style.display = 'inline-block';
                document.getElementById('winner').innerHTML = 'Player O wins';
            }
            if(r2 == -3){
                document.getElementById('line2').style.display = 'inline-block';
                document.getElementById('gameover').style.display = 'inline-block';
                document.getElementById('winner').innerHTML = 'Player O wins';
            }
            if(r3 == -3){
                document.getElementById('line3').style.display = 'inline-block';
                document.getElementById('gameover').style.display = 'inline-block';
                document.getElementById('winner').innerHTML = 'Player O wins';
            }
            if(cl1 == -3){
                document.getElementById('line4').style.display = 'inline-block';
                document.getElementById('gameover').style.display = 'inline-block';
                document.getElementById('winner').innerHTML = 'Player O wins';
            }
            if(cl2 == -3){
                document.getElementById('line5').style.display = 'inline-block';
                document.getElementById('gameover').style.display = 'inline-block';
                document.getElementById('winner').innerHTML = 'Player O wins';
            }
            if(cl3 == -3){
                document.getElementById('line6').style.display = 'inline-block';
                document.getElementById('gameover').style.display = 'inline-block';
                document.getElementById('winner').innerHTML = 'Player O wins';
            }
            if(d1 == -3){
                document.getElementById('line8').style.display = 'inline-block';
                document.getElementById('gameover').style.display = 'inline-block';
                document.getElementById('winner').innerHTML = 'Player O wins';
            }
            if(d2 == -3){
                document.getElementById('line7').style.display = 'inline-block';
                document.getElementById('gameover').style.display = 'inline-block';
                document.getElementById('winner').innerHTML = 'Player O wins';
            }
            if(d2 == -3){
                document.getElementById('line7').style.display = 'inline-block';
                document.getElementById('gameover').style.display = 'inline-block';
                document.getElementById('winner').innerHTML = 'Player O wins';
            }

            if(i == 9){
                document.getElementById('gameover').style.display = 'inline-block';
                document.getElementById('winner').innerHTML = 'Match draw';
            }

        }