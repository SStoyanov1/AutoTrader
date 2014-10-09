"use strict";

app.factory("CategoryResource", function($resource) {
    return $resource("/api/categories");
});