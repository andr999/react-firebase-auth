import React from 'react'
import { ResponsiveBar } from '@nivo/bar'

const data = [
    {
      "country": "AD",
      "hot dog": 198,
      "hot dogColor": "hsl(282, 70%, 50%)",
      "burger": 26,
      "burgerColor": "hsl(209, 70%, 50%)",
      "sandwich": 67,
      "sandwichColor": "hsl(302, 70%, 50%)",
      "kebab": 48,
      "kebabColor": "hsl(193, 70%, 50%)",
      "fries": 180,
      "friesColor": "hsl(217, 70%, 50%)",
      "donut": 128,
      "donutColor": "hsl(241, 70%, 50%)"
    },
    {
      "country": "AE",
      "hot dog": 65,
      "hot dogColor": "hsl(335, 70%, 50%)",
      "burger": 76,
      "burgerColor": "hsl(98, 70%, 50%)",
      "sandwich": 144,
      "sandwichColor": "hsl(167, 70%, 50%)",
      "kebab": 96,
      "kebabColor": "hsl(334, 70%, 50%)",
      "fries": 88,
      "friesColor": "hsl(28, 70%, 50%)",
      "donut": 91,
      "donutColor": "hsl(36, 70%, 50%)"
    },
    {
      "country": "AF",
      "hot dog": 2,
      "hot dogColor": "hsl(31, 70%, 50%)",
      "burger": 52,
      "burgerColor": "hsl(132, 70%, 50%)",
      "sandwich": 175,
      "sandwichColor": "hsl(117, 70%, 50%)",
      "kebab": 115,
      "kebabColor": "hsl(216, 70%, 50%)",
      "fries": 44,
      "friesColor": "hsl(89, 70%, 50%)",
      "donut": 105,
      "donutColor": "hsl(93, 70%, 50%)"
    },
    {
      "country": "AG",
      "hot dog": 175,
      "hot dogColor": "hsl(101, 70%, 50%)",
      "burger": 125,
      "burgerColor": "hsl(224, 70%, 50%)",
      "sandwich": 49,
      "sandwichColor": "hsl(97, 70%, 50%)",
      "kebab": 95,
      "kebabColor": "hsl(32, 70%, 50%)",
      "fries": 120,
      "friesColor": "hsl(247, 70%, 50%)",
      "donut": 18,
      "donutColor": "hsl(322, 70%, 50%)"
    },
    {
      "country": "AI",
      "hot dog": 130,
      "hot dogColor": "hsl(263, 70%, 50%)",
      "burger": 190,
      "burgerColor": "hsl(296, 70%, 50%)",
      "sandwich": 101,
      "sandwichColor": "hsl(280, 70%, 50%)",
      "kebab": 150,
      "kebabColor": "hsl(53, 70%, 50%)",
      "fries": 40,
      "friesColor": "hsl(223, 70%, 50%)",
      "donut": 10,
      "donutColor": "hsl(115, 70%, 50%)"
    },
    {
      "country": "AL",
      "hot dog": 80,
      "hot dogColor": "hsl(135, 70%, 50%)",
      "burger": 163,
      "burgerColor": "hsl(119, 70%, 50%)",
      "sandwich": 4,
      "sandwichColor": "hsl(80, 70%, 50%)",
      "kebab": 140,
      "kebabColor": "hsl(1, 70%, 50%)",
      "fries": 144,
      "friesColor": "hsl(310, 70%, 50%)",
      "donut": 94,
      "donutColor": "hsl(256, 70%, 50%)"
    },
    {
      "country": "AM",
      "hot dog": 45,
      "hot dogColor": "hsl(48, 70%, 50%)",
      "burger": 2,
      "burgerColor": "hsl(352, 70%, 50%)",
      "sandwich": 193,
      "sandwichColor": "hsl(217, 70%, 50%)",
      "kebab": 31,
      "kebabColor": "hsl(10, 70%, 50%)",
      "fries": 200,
      "friesColor": "hsl(288, 70%, 50%)",
      "donut": 190,
      "donutColor": "hsl(97, 70%, 50%)"
    }
  ] 
 
const NivoPage= () => {

  
return (
        <div style={{height: 200}}>
<ResponsiveBar
        data={data}
        keys={[ 'hot dog', 'burger', 'sandwich', 'kebab', 'fries', 'donut' ]}
        indexBy="country"
        margin={{ top: 50, right: 130, bottom: 50, left: 60 }}
        padding={0.3}
        colors={{ scheme: 'nivo' }}
        defs={[
            {
                id: 'dots',
                type: 'patternDots',
                background: 'inherit',
                color: '#38bcb2',
                size: 4,
                padding: 1,
                stagger: true
            },
            {
                id: 'lines',
                type: 'patternLines',
                background: 'inherit',
                color: '#eed312',
                rotation: -45,
                lineWidth: 6,
                spacing: 10
            }
        ]}
        fill={[
            {
                match: {
                    id: 'fries'
                },
                id: 'dots'
            },
            {
                match: {
                    id: 'sandwich'
                },
                id: 'lines'
            }
        ]}
        borderColor={{ from: 'color', modifiers: [ [ 'darker', 1.6 ] ] }}
        axisTop={null}
        axisRight={null}
        axisBottom={{
            tickSize: 5,
            tickPadding: 5,
            tickRotation: 0,
            legend: 'country',
            legendPosition: 'middle',
            legendOffset: 32
        }}
        axisLeft={{
            tickSize: 5,
            tickPadding: 5,
            tickRotation: 0,
            legend: 'food',
            legendPosition: 'middle',
            legendOffset: -40
        }}
        labelSkipWidth={12}
        labelSkipHeight={12}
        labelTextColor={{ from: 'color', modifiers: [ [ 'darker', 1.6 ] ] }}
        legends={[
            {
                dataFrom: 'keys',
                anchor: 'bottom-right',
                direction: 'column',
                justify: false,
                translateX: 120,
                translateY: 0,
                itemsSpacing: 2,
                itemWidth: 100,
                itemHeight: 20,
                itemDirection: 'left-to-right',
                itemOpacity: 0.85,
                symbolSize: 20,
                effects: [
                    {
                        on: 'hover',
                        style: {
                            itemOpacity: 1
                        }
                    }
                ]
            }
        ]}
        animate={true}
        motionStiffness={90}
        motionDamping={15}
    />
        </div>
        
    )
}
    
    


export default NivoPage;