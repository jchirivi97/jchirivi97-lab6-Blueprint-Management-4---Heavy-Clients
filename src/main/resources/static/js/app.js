var app = (function () {

    var lastpointX = null ;
    var lastpointY = null ;

    var funcion = function (planes) {
        var total = 0;
        if (planes != null) {
            var objetos = planes.map(function (bp) {
                return {key: bp.name, value: bp.points.length}
            });
            $("table tbody").empty();
            objetos.map(function (bp) {
                var columna = '<tr><td>' + bp.key + '</td><td>' + bp.value + '</td><td> <button type="button" class="btn btn-primary" onclick="app.getblueprintsAuthorname(\'' + bp.key + '\')">Open</button></td></tr>';
                total = total + bp.value;
                $("table tbody").append(columna);
                document.getElementById("sumapoints").innerHTML = "Total user points: " + total;

            });

            document.getElementById("nomauthor").innerHTML = nameauthor + "'s blueprints";

        }

    }

    var draw = function (blueprint) {
        var c = document.getElementById("canv");
        var ctx = c.getContext("2d");

        c.width = c.width;

        ctx.moveTo(blueprint.points[0].x, blueprint.points[0].y);
        blueprint.points.map(function (obj) {
            ctx.lineTo(obj.x, obj.y);
            lastpointX = obj.x;
            lastpointY = obj.y;
        });
        ctx.stroke();
        alert("ultimos:" + lastpointY+ " , " + lastpointX);

    }

    /* -------------------- */
    function getOffset(obj) {
        var offsetLeft = 0;
        var offsetTop = 0;
        do {
            if (!isNaN(obj.offsetLeft)) {
                offsetLeft += obj.offsetLeft;
            }
            if (!isNaN(obj.offsetTop)) {
                offsetTop += obj.offsetTop;
            }
        } while (obj = obj.offsetParent);
        return {left: offsetLeft, top: offsetTop};
    }

    function drawcanv(event) {
        var canvas = document.getElementById("canv"),
            context = canvas.getContext("2d");
        var offset = getOffset(canvas);
        context.fillRect(event.pageX - parseInt(offset.left), event.pageY - parseInt(offset.top), 5, 5);

        context.moveTo(lastpointX,lastpointY);
        context.lineTo(event.pageX - parseInt(offset.left), event.pageY - parseInt(offset.top));
        lastpointY = event.pageY - parseInt(offset.top);
        lastpointX = event.pageX - parseInt(offset.left);
        alert("ultimos:" + lastpointY+ " , " + lastpointX);

    }


    return {

        init: function () {

            var canvas = document.getElementById("canv");
            var context = canvas.getContext("2d");
            var offset = getOffset(canvas);

            if (window.PointerEvent) {
                canvas.addEventListener("pointerdown", function (event) {
                    alert("Coodernada en x: " + (event.pageX - parseInt(offset.left)).toString() + "y: " + (event.pageY - parseInt(offset.top)).toString());

                }, false);
            } else {
                canvas.addEventListener("pointerdown", function (event) {

                    alert("Coodernada en x: " + (event.pageX - parseInt(offset.left)).toString() + "y: " + (event.pageY - parseInt(offset.top)).toString());

                }, false);
            }

        },

        getDraws : function () {
            var canvas = document.getElementById("canv");
            var context = canvas.getContext("2d");
            var offset = getOffset(canvas);

            if (window.PointerEvent) {
                canvas.addEventListener("pointerdown", drawcanv, false);

            } else {

                canvas.addEventListener("mousedown", drawcanv, false);
            }
        },

        /* ------------- */

        getblueprintsAuthor: function () {
            nameauthor = document.getElementById("name").value;
            apimock.getBlueprintsByAuthor(nameauthor, funcion);
        },
        getblueprintsAuthorname: function (name) {
            nameauthor = document.getElementById("name").value;
            apimock.getBlueprintsByNameAndAuthor(name, nameauthor, draw);
        }

    };

})();








