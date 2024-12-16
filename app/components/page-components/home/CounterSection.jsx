"use client";
import Counter from "@components/page-components/Counter";
import AppGrid from "@components/page-components/AppGrid";
import { Card } from "@mui/material";
import AppText from "@components/material-components/AppText";
import AppVstack from "@components/material-components/AppVstack";
import { FaRegHandshake } from "react-icons/fa6";
import { MdSupportAgent } from "react-icons/md";
import { IoDiamond } from "react-icons/io5";
import { FaStackExchange } from "react-icons/fa";

export default function CounterSection() {
  const counterData = [
    {
      value: 15,
      id: "1",
      description: "More than 15 years spare part experience",
      icon: <IoDiamond />,
    },
    {
      value: 90,
      id: "2",
      description: "Customers served in more than 90 countries",
      icon: <FaRegHandshake />,
    },
    {
      value: 6200,
      id: "3",
      description: "Sales made more than 6200 cases worldwide",
      icon: <FaStackExchange />,
    },
    {
      value: 100,
      id: "4",
      description: "100% satisfaction guaranteed",
      icon: <MdSupportAgent />,
    },
  ];
  return (
    <AppGrid
      sx={{
        gridTemplateColumns: {
          xs: "auto",
          md: "auto auto",
          lg: "minmax(300px, auto) minmax(300px, auto) minmax(300px, auto) minmax(300px, auto)",
        },
        justifyContent: "center",
        gap: "20px",
      }}
    >
      {counterData.map((item) => {
        return (
          <Card width="500px" key={item.id} sx={{ p: "20px", boxShadow: 3 }}>
            <AppVstack sx={{ alignItems: "center", textAlign: "center" }}>
              <Counter value={item.value} />
              <AppText
                sx={{ fontWeight: "500", fontSize: "1.2rem" }}
                text={item.description}
              />
            </AppVstack>
          </Card>
        );
      })}
    </AppGrid>
  );
}
