<!doctype html>
<html lang="en">
  <head>
    <!-- Required meta tags -->
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">

    <!-- Bootstrap CSS -->
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css" integrity="sha384-JcKb8q3iqJ61gNV9KGb8thSsNjpSL0n8PARn9HuZOnIxN0hoP+VmmDGMN5t9UJ0Z" crossorigin="anonymous">

    <title>Preisrechner</title>
  </head>
  <body>
    <form>
      <div class="container">

  <div class="row">
    <div class="col">

    </div>
    <div class="col">
      <div class="form-group">
        <label for="devices">Anzahl Geräte</label>
        <input type="number" class="form-control" id="devices" onchange="startCalculating();" value="10000">
        <label for="messages">Anzahl Nachrichten im Monat pro Gerät</label>
        <input type="number" class="form-control" id="messages" onchange="startCalculating();" value="300">
        <label for="rules">Anzahl Regeln ausgeführt im Monat pro Gerät</label>
        <input type="number" class="form-control" id="rules" onchange="startCalculating();" value="300">
        <label for="shadow">Anzahl kb Device Shadow (Digital Twin) pro Gerät</label>
        <input type="number" class="form-control" id="shadow" onchange="startCalculating();" value="8">
        <label for="connectivity">Anzahl Verbindungsminuten pro Monat pro Gerät (15 = 0.5 Minuten * 30 Tage)</label>
        <input type="number" class="form-control" id="connectivity" onchange="startCalculating();" value="15">
      </div>
    </form>


    <table class="table">
    <thead>
      <tr>
        <th scope="col">Kostenart</th>
        <th scope="col">Geräte Kosten</th>
        <th scope="col">Nachrichten Kosten</th>
        <th scope="col">Regeln Kosten</th>
        <th scope="col">Digital Twin Kosten</th>
        <th scope="col">Verbindungskosten</th>
        <th scope="col">Gesamtkosten</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <th scope="row">AWS IoT</th>
        <td id="aws-devices-cost"></td>
        <td id="aws-messages-cost"></td>
        <td id="aws-rules-cost"></td>
        <td id="aws-shadow-cost"></td>
        <td id="aws-connectivity-cost"></td>
        <td id="aws-full-cost"></td>
      </tr>
      <tr>
        <th scope="row">Azure IoT</th>
        <td id="azure-devices-cost"></td>
        <td id="azure-messages-cost"></td>
        <td id="azure-rules-cost"></td>
        <td id="azure-shadow-cost"></td>
        <td id="azure-connectivity-cost"></td>
        <td id="azure-full-cost"></td>
      </tr>
      <tr>
        <th scope="row">Google Cloud IoT</th>
        <td id="google-devices-cost"></td>
        <td id="google-messages-cost"></td>
        <td id="google-rules-cost"></td>
        <td id="google-shadow-cost"></td>
        <td id="google-connectivity-cost"></td>
        <td id="google-full-cost"></td>
      </tr>
    </tbody>
  </table>
    </div>
    <div class="col">

    </div>
  </div>
</div>


  <script src="/calculate.js"></script>

    <!-- Optional JavaScript -->
    <!-- jQuery first, then Popper.js, then Bootstrap JS -->
    <script src="https://code.jquery.com/jquery-3.5.1.slim.min.js" integrity="sha384-DfXdz2htPH0lsSSs5nCTpuj/zy4C+OGpamoFVy38MVBnE+IbbVYUew+OrCXaRkfj" crossorigin="anonymous"></script>
    <script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.1/dist/umd/popper.min.js" integrity="sha384-9/reFTGAW83EW2RDu2S0VKaIzap3H66lZH81PoYlFhbGU+6BZp6G7niu735Sk7lN" crossorigin="anonymous"></script>
    <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/js/bootstrap.min.js" integrity="sha384-B4gt1jrGC7Jh4AgTPSdUtOBvfO8shuf57BaghqFfPlYxofvL8/KUEfYiJOMMV+rV" crossorigin="anonymous"></script>
  </body>
</html>
