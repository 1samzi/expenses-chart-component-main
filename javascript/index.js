
fetch ('data.json')
    .then(response => response.json())
    .then(data => {
        //using data to update the graph height
        
        data.forEach(item => {
            console.log(item.day + " " + item.amount);
            $(".graph#"+item.day).css("height", + (item.amount * 2.5) +"px");
            $("span."+item.day).text("$"+item.amount);
            $(".stat-text." + item.day).css("bottom", + ((item.amount * 2.5)+40)  +"px");
            $(".graph#"+item.day).hover(function(){
                $(".stat-text." + item.day).toggleClass("hidden");
            },  function() {
                console.log("hi");
                $(".stat-text." + item.day).toggleClass("hidden");  
            })
        });
    })