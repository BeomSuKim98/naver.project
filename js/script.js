function shoppingAdImg(){
    let imageIndex = $('productLink');
    console.log(imageIndex);

    for(let i = 10; i < imageIndex.length; i++ ){
        $(imageIndex[i]).attr('src', 'adimg_' + (i+1));
    }
}

shoppingAdImg();
