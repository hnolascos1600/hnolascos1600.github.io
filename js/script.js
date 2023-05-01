var diasSemana = ['Domingo', 'Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado'];
        var mesesAnio = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'];
        function actualizarHoraActual() {
            var fechaHoraActual = new Date();
            var diaSemana = diasSemana[fechaHoraActual.getDay()];
            var numDia = fechaHoraActual.getDate();
            var mesAnio = mesesAnio[fechaHoraActual.getMonth()];
            var anio = fechaHoraActual.getFullYear();
            var hora = fechaHoraActual.getHours();
            var minutos = fechaHoraActual.getMinutes();
            var segundos = fechaHoraActual.getSeconds();

            var horaActual = 'Hoy es ' + diaSemana + ' ' + numDia + ' de ' + mesAnio + ' del ' + anio + ' ' + agregarCero(hora) + ':' + agregarCero(minutos) + ':' + agregarCero(segundos);

            document.getElementById('hora-actual').innerHTML = horaActual;
        }
        function agregarCero(numero) {
            if (numero < 10) {
                return '0' + numero;
            }
            return numero;
        }
        actualizarHoraActual();
        setInterval(actualizarHoraActual, 1000);