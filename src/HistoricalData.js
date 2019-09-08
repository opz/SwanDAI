import React from 'react'
import * as d3 from 'd3'
import { initResponsive, derivativePrice } from './helpers'

const expiry = 1576800000000
function premium(d) {
  const daysleft = (expiry - d.timestamp) / (24 * 60 * 60000)
  return d.derivative + 0.02 + (Math.random() / 50)
}

class HistoricalData extends React.Component {
  componentDidMount() {
    const data = this.props.data.map(d => {
      d.premium = premium(d)
      return d
    })

    const margins = { top: 15, right: 10, bottom: 50, left: 60 }
    const daiChart = initResponsive("#historical-dai-chart", { top: 15, right: 10, bottom: 5, left: 60 })
    const swandaiChart = initResponsive("#historical-swan-dai-chart", margins)

    const x = d3.scaleTime()
      .range([0, daiChart.chartWidth])
      .domain(d3.extent(data, d => new Date(d.timestamp)))

    const [min, max] = d3.extent(data, d => d.price)
    const [pmin, pmax] = max - 1 > 1 - min ? [1 - (max - 1), max] : [min, 1 + (1-min)]
    const daiY = d3.scaleLinear()
      .rangeRound([daiChart.chartHeight, 0])
      .domain([pmin, pmax])

    const swandaiY = d3.scaleLinear()
      .rangeRound([swandaiChart.chartHeight, 0])
      .domain([0.975, d3.max(data, d => d.derivative)*1.05])

    const line = d3.line()
      .x(d => x(new Date(d.timestamp)))
      .y(d => daiY(d.price))

    const dline = d3.line()
      .x(d => x(new Date(d.timestamp)))
      .y(d => swandaiY(d.premium))

    const area = d3.area()
      .x(d => x(new Date(d.timestamp)))
      .y0(d => daiY(1))
      .y1(d => daiY(d.price))

    const premiumArea = d3.area()
      .x(d => x(new Date(d.timestamp)))
      .y0(d => swandaiY(d.derivative))
      .y1(d => swandaiY(d.premium))

    daiChart.g.append("g")
      .attr("class", "historical-axis historical-axis-y")
      .attr("transform", "translate(-2, 0)")
      .call(d3.axisLeft(daiY))

    daiChart.g.append("text")
      .attr("transform", "rotate(-90)")
      .attr("y", 0 - margins.left)
      .attr("x",0 - (daiChart.chartHeight / 2))
      .attr("dy", "1em")
      .style("text-anchor", "middle")
      .text("DAI/USDC")

    daiChart.g.append("path")
      .datum(data)
      .attr("class", "historical-area")
      .attr("stroke-width", 0)
      .attr("d", area)

    daiChart.g.append("path")
      .datum(data)
      .attr("class", "historical-line")
      .attr("stroke-linejoin", "round")
      .attr("stroke-linecap", "round")
      .attr("stroke-width", 1.5)
      .attr("d", line)  

    daiChart.g.append("path")
      .datum([{timestamp: data[0].timestamp, price: 1}, {timestamp: data[data.length - 1].timestamp, price: 1}])
      .attr("class", "baseline")
      .attr("stroke-linejoin", "round")
      .attr("stroke-linecap", "round")
      .attr("stroke-width", 1.5)
      .attr("d", line) 

    swandaiChart.g.append("path")
      .datum(data)
      .attr("class", "swandai-area")
      .attr("stroke-width", 0)
      .attr("d", premiumArea) 

    swandaiChart.g.append("path")
      .datum(data)
      .attr("class", "derivative-line")
      .attr("stroke-linejoin", "round")
      .attr("stroke-linecap", "round")
      .attr("stroke-width", 1.5)
      .attr("d", dline)

    swandaiChart.g.append("path")
      .datum([{timestamp: data[0].timestamp, derivative: 1}, {timestamp: data[data.length - 1].timestamp, derivative: 1}])
      .attr("class", "baseline")
      .attr("stroke-linejoin", "round")
      .attr("stroke-linecap", "round")
      .attr("stroke-width", 1.5)
      .attr("d", dline)  

    swandaiChart.g.append("g")
      .attr("class", "historical-axis historical-axis-x")
      .attr("transform", "translate(0," + swandaiChart.chartHeight + ")")
      .call(d3.axisBottom(x))
      .selectAll("text")
      .attr("transform", `rotate(-60)`)
      .style("text-anchor", "end")

    swandaiChart.g.append("g")
      .attr("class", "historical-axis historical-axis-y")
      .attr("transform", "translate(-2, 0)")
      .call(d3.axisLeft(swandaiY))

    swandaiChart.g.append("text")
      .attr("transform", "rotate(-90)")
      .attr("y", 0 - margins.left)
      .attr("x",0 - (swandaiChart.chartHeight / 2))
      .attr("dy", "1em")
      .style("text-anchor", "middle")
      .text("SWANDAI/USDC")
  }

  render() {
    return (
      <div className="historical-chart-wrapper chart">
        <div className="chart-title">Historical (Last 30 Days)</div>
        <div id="historical-dai-chart"></div>
        <div id="historical-swan-dai-chart"></div>
      </div>
    )
  }
}


export default HistoricalData