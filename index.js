const myCity = {
    city: "Northampton",
    popular: false,
    country: "England"
};

let myObject;

myObject={
    a:10,
    b:"abc"
};

myObject.c="Added";

delete myObject.a;

let myPost = {};

myPost.postTitle = "Object is reference type";
myPost.postLikes = 0;
myPost.shared = false;

myPost.postLikes +=1;

delete myPost.shared;