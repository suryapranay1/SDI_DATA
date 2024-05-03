import {
    Box,
    Button,
    Card,
    Grid,
    Input,
    Stack,
    Typography,
    Divider,
    ListItemButton,
  } from '@mui/joy';
  import React, { useState } from 'react';
  import StorageIcon from '@mui/icons-material/Storage';
import { Link,Outlet,useNavigate } from 'react-router-dom';
import AlertDialogModal from './Delete';
import EditDialogModal from './Edit';

  
  const cardData = [
    {
      title: 'Map1',
      datecreated: '3/2/2024',
      datemodified: '2/3/2024',
      Description:'gcrs map1',
      Levelofsharing:'Admin',
      Source:'local',
      PointOfContact:'jcgeonodetester',
      Language:'eng',
      SupplementalInformation:'No information provided'

    },
    {
      title: 'map2',
      datecreated: '3/1/2024',
      datemodified: '2/3/2024',
      Description:'gcrs map2',
      Levelofsharing:'admin',
      Source:'local',
      PointOfContact:'jcgeonodetester',
      Language:'eng',
      SupplementalInformation:'No information provided'
      
    },
    {
      title: 'map3',
      datecreated: '3/1/2024',
      datemodified: '2/3/2024',
      Description:'gcrs map3',
      Levelofsharing:'admin',
      Source:'local',
      PointOfContact:'jcgeonodetester',
      Language:'eng',
      SupplementalInformation:'No information provided'
    },
    {
      title: 'map4',
      datecreated: '3/1/2024',
      datemodified: '2/3/2024',
      Description:'gcrs map4',
      Levelofsharing:'user',
      Source:'local',
      PointOfContact:'jcgeonodetester',
      Language:'eng',
      SupplementalInformation:'No information provided'
    },
    {
      title: 'map5',
      datecreated: '3/1/2024',
      datemodified: '2/3/2024',
      Description:'gcrs map5',
      Levelofsharing:'admin',
      Source:'local',
      PointOfContact:'jcgeonodetester',
      Language:'eng',
      SupplementalInformation:'No information provided'
    },
  ];
  
  const DataList = () => {
    const navigate=useNavigate();
    return (
      <Stack p={8}>
        
        <Grid container spacing={1}>
          
          <Grid md={1} xs="auto">
            <Divider orientation="vertical" />
          </Grid>
          <Grid md={7} xs="auto">
            {cardData.map((data, index) => (
              <Card
                variant="outlined"
                key={index}
                sx={{ width: 800, mt: 3, bgcolor: '#fff' }}
              >
                <Box
                  sx={{
                    display: 'flex',
                    flexDirection: 'row',
                    alignItems: 'center',
                    gap: 2,
                  }}
                >
                  
                  <StorageIcon />
                  <Button sx={{backgroundColor:'lightgreen','&:hover':{
                    backgroundColor:'limegreen'
                  }}} onClick={()=>{
                    navigate("/dataset",{
                      state:data
                    })
                  }}>
                  <Typography>
                    <b>Dataset</b>
                  </Typography>

                  </Button>
                  
                  
                </Box>
                <Typography
                  level="body-lg"
                  textColor={'#1d99c5'}
                  sx={{ textDecoration: 'underline' }}
                >
                  {data.title}
                </Typography>
                
                <Stack>
                  
                </Stack>
                <Stack direction={'row'} alignItems={'center'} gap={2}>
                  <Box>
                    <Typography>
                      Date created : <b>{data.datecreated}</b>
                    </Typography>
                    <Typography>
                      Date modified : <b>{data.datemodified}</b>
                    </Typography>
                  </Box>
                  <Box>
                    
                    <Typography>
                      description : <b>{data.Description}</b>
                    </Typography>
                    <Typography>
                      Level of sharing: <b>{data.Levelofsharing}</b>
                    </Typography>
                  </Box>
                </Stack>
                <Grid sx={{display:'flex'}}>
                <AlertDialogModal/>
                <EditDialogModal/>
                </Grid>
                
              </Card>
            ))}
          </Grid>
        </Grid>
      </Stack>
    );
  };
  
  export default DataList;