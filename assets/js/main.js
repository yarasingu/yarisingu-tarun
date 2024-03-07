window.onload = ()=>{
    
    var data = [{
      values: [27, 11, 25, 8, 1, 3, 25],
      labels: ['US', 'China', 'European Union', 'Russian Federation', 'Brazil', 'India', 'Rest of the World' ],
      text: 'CO2',
      textposition: 'inside',
      //domain: {column: 1},
      name: 'CO2 Emissions',
      hoverinfo: 'label',
      hole: .5,
      type: 'pie'
    }];

    var layout = {
      title: 'CO2 Emissions 1990-2019',
      annotations: [
        {
          font: {
            size: 13
          },
          showarrow: false,
          text: 'CO2',
          x: 0.5,
          y: 0.5
        }
      ],
      height: 400,
      width: 400,
      showlegend: true,
      grid: {rows: 1, columns: 1}
    };

    Plotly.newPlot('plotsec', data, layout, {displaylogo: false, modeBarButtonsToRemove: ['toImage', 'hoverClosestPie'], responsive:true});
    
    //axios get
    var url = "https://api.nasa.gov/planetary/apod?api_key=97vrxZrBhbfurn9eOCvqpXnPKLI4cscixcruQ4AK";
    
    var apod_title = $("#apod_title")
    var apod_img = $("#apod_img")
    var apod_vid = $("#apod_vid")
    
    axios.get(url)
      .then(function (response) {
        data = response.data;
        apod_title.text("APOD: "+data.title)
        if(data.media_type == "video") {
              apod_img.css("display", "none"); 
              apod_vid.attr("src", data.url);
          }
          else {
              apod_vid.css("display", "none"); 
              apod_img.attr("src", data.url);
          }
      })
      .catch(function (error) {
        alert("There seems to be some error in fetching data. Try again later")
      });


}
