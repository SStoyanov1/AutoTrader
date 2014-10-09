"use strict";

app.factory("MakeResource", function($resource) {
    var MakeResource;
    MakeResource = $resource("/api/makes");

    return MakeResource;
});