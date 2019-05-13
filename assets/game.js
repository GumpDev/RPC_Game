var xp = 1;
var level = 1;
var gold = 0;
var nome = "PlayerName";
var atribPoints = 0;
var nascimento = "";

function init(){
    Xp.Display();
    nome = window.location.href.split('?nome=')[1];
    nome = nome.split('&')[0];   
    
    nascimento = window.location.href.split('&nascimento=')[1];
    nascimento = nascimento.split('&')[0];
    nascimento = nascimento.split('-')[0];
    if(2019 - nascimento < 12){
        window.location.href = "index.html?menorIdade";
    }
    
    document.getElementById("nome").innerText = nome;
    document.getElementById("atribsPoints").innerText = atribPoints;
    setInterval(() => {
        Gold.add(1);
    }, 1000);
    setInterval(() => {
        Xp.Add(1);
    }, 10000);

    Control.init();
}

var Gold = {
    add : function (quant){
        gold += quant;
        document.getElementById("gold").innerText = gold + "g";
    },
    remove : function (quant){
        gold -= quant;
        document.getElementById("gold").innerText = gold + "g";
    }
}

var Atributos = {
    ata : ata = 1,
    def : def = 1,
    vel : vel = 1,
    sor : sor = 1,
    int : int = 1,
    addPoints : function(quant){
        atribPoints += quant;
        document.getElementById("atribsPoints").innerText = atribPoints;
        document.getElementById("ata").innerHTML = Atributos.ata + "<small>+</small>";
        document.getElementById("def").innerHTML = Atributos.def + "<small>+</small>";
        document.getElementById("vel").innerHTML = Atributos.vel + "<small>+</small>";
        document.getElementById("sor").innerHTML = Atributos.sor + "<small>+</small>";
        document.getElementById("int").innerHTML = Atributos.int + "<small>+</small>";
    },
    addAtribs : function (id){
        if(atribPoints > 0){
            if(id == 0)
                Atributos.ata++;
            else if(id == 1)
                Atributos.def++;
            else if(id == 2)
                Atributos.vel++;
            else if(id == 3)
                Atributos.sor++;
            else if(id == 4)
                Atributos.int++;
        
            atribPoints--;
            document.getElementById("atribsPoints").innerText = atribPoints;
            if(atribPoints == 0){
                document.getElementById("ata").innerHTML = Atributos.ata;
                document.getElementById("def").innerHTML = Atributos.def;
                document.getElementById("vel").innerHTML = Atributos.vel;
                document.getElementById("sor").innerHTML = Atributos.sor;
                document.getElementById("int").innerHTML = Atributos.int;
            }else{
                document.getElementById("ata").innerHTML = Atributos.ata + "<small>+</small>";
                document.getElementById("def").innerHTML = Atributos.def + "<small>+</small>";
                document.getElementById("vel").innerHTML = Atributos.vel + "<small>+</small>";
                document.getElementById("sor").innerHTML = Atributos.sor + "<small>+</small>";
                document.getElementById("int").innerHTML = Atributos.int + "<small>+</small>";
            }
        }
    }
}

var Xp = {
    Add : function (quant){
        xp += quant;
        if(xp >= 11){
            level++;
            xp -= 10;
            Atributos.addPoints(1);
        }
        Xp.Display();
    },
    Remove : function (quant){
        xp -= quant;
        if(xp < 0){
            level--;
            xp += 11;
        }
        Xp.Display();
    },
    Display : function (){
        var lvComp = document.getElementById("lv");
        var xpComp = document.getElementById("xp");
        xpComp.innerText = "";
        lvComp.innerText = level;
        for(var i = 1; i < 10; i++){
            if(xp > i)
                xpComp.innerText += "█";
            else
                xpComp.innerText += "▒";
        }
    }
}

var Tab = {
    open : function (t){
        if(t == 0){
            f("#tab1").style.display = "block";
            f("#tab2").style.display = "none";
            f("#btn_tab0").className = "";
            f("#btn_tab1").className = "active";
            f("#btn_tab2").className = "";
            f("#tab1").style.width = "98%";
        }else if(t == 1){
            f("#tab1").style.display = "none";
            f("#tab2").style.display = "block";
            f("#btn_tab0").className = "";
            f("#btn_tab1").className = "";
            f("#btn_tab2").className = "active";
            f("#tab2").style.width = "98%";
        }
    }
}


var x = 0;
var y = 0;
var maxX = 500;
var maxY = 500;
var Control = {
    walk : function(dirx,diry){
        dirx *= 50;
        diry *= 50;

        x += dirx;
        y += diry;
        if(x > maxX || y > maxY){
            x -= dirx;
            y -= diry;
        }else{
            window.scrollTo(x,y);
        }   
    },
    init : function(){
        window.scrollTo(x,y);

        window.addEventListener('keydown',function(e){
            if(e.key == "ArrowDown")
                Control.walk(0,1);
            if(e.key == "ArrowUp")
                Control.walk(0,-1);
            if(e.key == "ArrowLeft")
                Control.walk(-1,0);
            if(e.key == "ArrowRight")
                Control.walk(1,0);
        });
    }
}

var Inventory = {
    slots : slots = [],
    itens : itens = [
        "c|=><br>Espada Fajuta"
    ],
    add : function (id){
        if(Inventory.slots.length < 9){
            Inventory.slots.push(Inventory.itens[id]);
            Inventory.show();
        }
    },
    show : function (){
        for(var i = 0; i < Inventory.slots.length; i++){
            f("#slot" + i).innerHTML = Inventory.slots[i];
        }
    }
}