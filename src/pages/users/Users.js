import React, { useEffect, useState } from "react";
import { Grid } from "@material-ui/core";
import MUIDataTable from "mui-datatables";
import PageTitle from "../../components/PageTitle";
import { getPaginatedUsers } from "../../actions/users";

export default function Users() {

  const [data, setData] = useState([]);

  useEffect(() => {
    setData(getPaginatedUsers(0, 25));
  }, []);

  return (
    <>
      <PageTitle title="Users" />
      <Grid container spacing={4}>
        <Grid item xs={12}>
          <MUIDataTable
            title="User List"
            data={data}
            columns={["Name", "Login"]}
            options={{
              rowsPerPage: 25,
              rowsPerPageOptions: [10, 15, 20],
              filterType: "checkbox",
              serverSide: true,
              onTableChange: (action, state) => {
                console.log(action);
                console.log(state);
              },
            }}
          />
        </Grid>
      </Grid>
    </>
  );
}