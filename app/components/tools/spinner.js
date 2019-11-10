import Component from '@ember/component';
import d3 from 'd3'

export default class Spinner extends Component {
  tagName = 'svg'

  didInsertElement() {
    this.createGraph()
  }

  createGraph() {
    let height = 800
    let width = 800
    let margin = 100
    let svg = d3.select('svg')
      .attr('height', height)
      .attr('width', width)
      .append("g")
      .attr("transform", `translate(${width / 2}, ${height / 2})`);

    let radius = Math.min(width, height) / 2 - margin
    let data = this.options.length ?
      this.options :
      [
        1,
        2,
        3,
        4
      ]

    // set the color scale
    var color = d3.scaleOrdinal()
      .domain(data)
      .range(d3.schemeSet2);

    // Compute the position of each group on the pie:
    let pie = d3.pie()
      .value(d => 100 / data.length)
    let data_ready = pie(data)

    // shape helper to build arcs:
    var arcGenerator = d3.arc()
      .innerRadius(0)
      .outerRadius(radius)

    // Build the pie chart
    svg
      .selectAll('g')
      .data(data_ready)
      .enter()
      .append('path')
      .attr('d', arcGenerator)
      .attr('fill', function (d) { return (color(d)) })
      .attr("stroke", "black")
      .style("stroke-width", "2px")


    svg
      .selectAll('g')
      .data(data_ready)
      .enter()
      .append('text')
      .text((d, a, i) => d.data)
      .attr("transform", function (d) { return "translate(" + arcGenerator.centroid(d) + ")"; })
      .style("text-anchor", "middle")
      .style("font-size", 17)
  }
}
