import React, { useState } from "react";
import MUIDataTable from "mui-datatables";
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  TextField,
  Tooltip,
  Typography,
} from "@mui/material";
import {
  IconList,
  IconInfoCircle,
  IconTruckDelivery,
} from "@tabler/icons-react";
import { useTheme } from "@mui/material/styles";

const Pesanan = () => {
  const theme = useTheme();
  const [data, setData] = useState([
    ["1", "Reza", "100000", "Belum Dikirim", "Password123"],
    ["2", "Hasbullah", "200000", "Dikirim", "Password456"],
    ["3", "Farras", "50000", "Belum Dikirim", "Password789"],
    ["4", "Putri", "300000", "Dikirim", "Password000"],
  ]);

  const [dialogOpen, setDialogOpen] = useState(false);
  const [dialogMode, setDialogMode] = useState(""); // "Create", "Read", "Update"
  const [currentRow, setCurrentRow] = useState(null);
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    city: "",
    state: "",
  });

  const [resetDialogOpen, setResetDialogOpen] = useState(false);
  const [newPassword, setNewPassword] = useState("");
  const [selectedRowIndex, setSelectedRowIndex] = useState(null);

  const handleList = (rowIndex) => {
    console.log("Listing data for row:", data[rowIndex]);
    // Add your listing logic here
  };

  const handleDetail = (rowIndex) => {
    setDialogMode("Detail");
    setCurrentRow(data[rowIndex]);
    setFormData({
      name: data[rowIndex][1],
      company: data[rowIndex][2],
      city: data[rowIndex][3],
      state: data[rowIndex][4],
    });
    setDialogOpen(true);
  };

  const handleChangeShippingStatus = (rowIndex) => {
    const newData = data.map((row, index) =>
      index === rowIndex
        ? [
            row[0],
            row[1],
            row[2],
            row[3] === "Dikirim" ? "Belum Dikirim" : "Dikirim", // Toggle status
            row[4], // Preserve existing Password
          ]
        : row
    );
    setData(newData);
  };

  const handleDialogClose = () => {
    setDialogOpen(false);
    setResetDialogOpen(false);
    setNewPassword("");
  };

  const columns = [
    { name: "No", label: "No" },
    { name: "Nama", label: "Nama" },
    { name: "Harga", label: "Harga" },
    { name: "Status", label: "Status" },
    { name: "Password", label: "Password" },
    {
      name: "Actions",
      label: "Actions",
      options: {
        filter: false,
        sort: false,
        empty: true,
        customBodyRender: (value, tableMeta, updateValue) => {
          return (
            <>
              <Tooltip title="Detail">
                <Button
                  onClick={() => handleDetail(tableMeta.rowIndex)}
                  sx={{ color: theme.palette.info.main }}
                >
                  <IconInfoCircle />
                </Button>
              </Tooltip>
              <Tooltip title="Ubah Status Pengiriman">
                <Button
                  onClick={() => handleChangeShippingStatus(tableMeta.rowIndex)}
                  sx={{ color: theme.palette.success.main }}
                >
                  <IconTruckDelivery />
                </Button>
              </Tooltip>
            </>
          );
        },
      },
    },
  ];

  return (
    <div>
      <MUIDataTable
        title={
          <Typography variant="h3" sx={{ fontWeight: 500 }}>
            Daftar Produk
          </Typography>
        }
        data={data}
        columns={columns}
        options={{
          selectableRows: "none",
          elevation: 0,
          rowsPerPage: 10,
          rowsPerPageOptions: [5, 10, 20, 50, 100],
        }}
      />
      <Dialog open={dialogOpen} onClose={handleDialogClose}>
        <DialogTitle>Detail Produk</DialogTitle>
        <DialogContent>
          <TextField
            margin="dense"
            label="Nama"
            name="name"
            fullWidth
            value={formData.name}
            onChange={() => {}}
            disabled
          />
          <TextField
            margin="dense"
            label="Harga"
            name="company"
            fullWidth
            value={formData.company}
            onChange={() => {}}
            disabled
          />
          <TextField
            margin="dense"
            label="Status"
            name="city"
            fullWidth
            value={formData.city}
            onChange={() => {}}
            disabled
          />
          <TextField
            margin="dense"
            label="Password"
            name="state"
            fullWidth
            value={formData.state}
            onChange={() => {}}
            disabled
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleDialogClose} color="primary">
            Close
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default Pesanan;
