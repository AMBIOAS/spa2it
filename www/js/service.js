// angular services definition

// attractions:
// GET http://2it.strong.no/Webdesk/get?page=1266777&properties=title&format=JSON&type=children
/*
{
    "from": "page",
    "elements": 
    [
        {
        "idPage": 1266791,
        "title": "Lucca"
        },
        {
        "idPage": 1266792,
        "title": "Pisa"
        },
        ...
    ]
}

Accommodations
1266787




app.factory('Accommodations', function($http, $log) {
    var factory = {};
    
    factory.getList = function() {
        $http.get('http://2it.strong.no/Webdesk/get?page=1266787&properties=title,idSmallPicture,presentation&format=JSON&type=children')
            .success( function(data) {
                return data.elements;
            })
            .error( function (data, status) {
                $log.log('[ERROR '+status+'] '+data);
                return [];
            });
    };
    
    
});

*/

