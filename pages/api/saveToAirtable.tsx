// pages/api/saveToAirtable.ts

import { NextApiRequest, NextApiResponse } from "next";
import axios from "axios";
import Airtable, { Base } from "airtable";

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const { name, email } = req.body;

  const AIRTABLE_API_KEY =
    "pateVtLe5Y7Zlavsa.39e9349a38e4cab120cabd0a6eee134c9fbd4e9d6d81c8627d6d92f7a5ddbff3";
  const AIRTABLE_BASE_ID = "appDL2bqrNdwLNCt7";
  const AIRTABLE_TABLE_NAME = "tblW8CWaZesbC62Q0";

  var base = new Airtable({ apiKey: AIRTABLE_API_KEY }).base(
    "appDL2bqrNdwLNCt7"
  );

  base(AIRTABLE_TABLE_NAME).create(
    [
      {
        fields: {
          Name: name,
          email: email,
        },
      },
    ],
    function (err: any, records: any) {
      if (err) {
        console.error(err);
        return;
      }
      records.forEach(function (record: any) {
        console.log(record.getId());
        res
          .status(200)
          .json({ success: true, message: "Data saved successfully." });
        return;
      });
    }
  );
  // const URL = `https://api.airtable.com/v0/${AIRTABLE_BASE_ID}/${AIRTABLE_TABLE_NAME}`;

  // try {
  //   const response = await axios.post(
  //     URL,
  //     {
  //       fields: {
  //         // Name: name,
  //         email: email,
  //         // Add other fields as needed
  //       },
  //     },
  //     {
  //       headers: {
  //         Authorization: `Bearer ${AIRTABLE_API_KEY}`,
  //         "Content-Type": "application/json",
  //       },
  //     }
  //   );

  //   res.status(200).json(response.data);
  // } catch (error) {
  //   res.status(500).json({ error: "Error saving data to Airtable" });
  //   console.log(error);
  // }
};
