function collect_ratings(){
    var ratings = { count = 0, sum = 0, average = 0 }; 
    let rating = 0

    var elements = document.querySelectorAll(".rating")

    elements.forEach(element => { 
        ratings.count++;
        rating += parseInt(element.id.replace("star",""))
        ratings.sum += parseInt(element.value())
    });

    if(ratings.count != 0){
        ratings.average = ratings.sum/ratings.count;
    }
    return ratings;
}

document.addEventListener("change", function(){
    const ratings = collect_ratings();
})