"use strict";

app.factory("ModelResource", function($resource) {
    return $resource("/api/models");
});