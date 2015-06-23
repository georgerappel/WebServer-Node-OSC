<script type="text/javascript" src="https://www.google.com/jsapi"></script>
  <script type="text/javascript">
    google.load('visualization', '1.1', {packages: ['line']});
    google.setOnLoadCallback(drawChart);

    function drawChart() {

      var data = new google.visualization.DataTable();
      data.addColumn('number', 'HH:MM');
      data.addColumn('number', 'Temperatura');

      data.addRows([
        [hora[0], temperatura[0]],
        [hora[1], temperatura[1]],
        [hora[2], temperatura[2]],
        [hora[3], temperatura[3]],
        [hora[4], temperatura[4]],
        [hora[5], temperatura[5]],
        [hora[6], temperatura[6]],
        [hora[7], temperatura[7]],
        [hora[8], temperatura[8]]
      ]);

      var options = {
        chart: {
          title: 'Temperatura',
          subtitle: 'variação em graus celsius (°C)'
        },
        width: 40%,
        height: 350
      };

      var chart = new google.charts.Line(document.getElementById('graficoTemperatura'));
      chart.draw(data, options);
    }
  </script>