import React from 'react'
import * as d3 from 'd3'
import { initResponsive, derivativePrice } from './helpers'

const xData = []
for (let i = 0.5; i <= 1.5; i += 0.025) {
  xData.unshift(i)
}
const data = xData.map(x => [x, derivativePrice(x)])

class Model extends React.Component {
  componentDidMount() {
    const margins = { top: 15, right: 10, bottom: 50, left: 50 }
    const { g, chartHeight, chartWidth } = initResponsive("#model-chart", margins)

    const y = d3.scaleLinear()
      .rangeRound([chartHeight, 0])
      .domain(d3.extent(data, d => d[1]))

    const x = d3.scaleLinear()
      .rangeRound([chartWidth, 0])
      .domain(d3.extent(data, d => d[0]))

    const line = d3.line()
      .x(d => x(d[0]))
      .y(d => y(d[1]))

    g.append("g")
      .attr("class", "model-axis model-axis-y")
      .attr("transform", "translate(-2, 0)")
      .call(d3.axisLeft(y))

    g.append("g")
      .attr("class", "model-axis model-axis-x")
      .attr("transform", "translate(0," + chartHeight + ")")
      .call(d3.axisBottom(x))

    g.append("text")             
      .attr("transform",
            "translate(" + (chartWidth/2) + " ," + 
                           (chartHeight + margins.top + 20) + ")")
      .style("text-anchor", "middle")
      .text("DAI price ($)")

    g.append("text")
      .attr("transform", "rotate(-90)")
      .attr("y", 0 - margins.left)
      .attr("x",0 - (chartHeight / 2))
      .attr("dy", "1em")
      .style("text-anchor", "middle")
      .text("SWAN DAI price ($)")

    g.append("path")
      .datum(data)
      .attr("class", "model-line")
      .attr("stroke-linejoin", "round")
      .attr("stroke-linecap", "round")
      .attr("stroke-width", 1.5)
      .attr("d", line)
  }

  render() {
    return (
      <div className="model-wrapper chart">
        <div className="chart-title">Model</div>
        <div id="model-chart"></div>
      </div>
    )
  }
}

export default Model