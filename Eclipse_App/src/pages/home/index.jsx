import React from 'react';
import DrawerAppBar from '../../components/menu/menu';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';


class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    componentDidMount() { }

    render() {
        return (
            <>
                <DrawerAppBar/>
                <main>
                    <Box sx={{ width: '100%' }}>
                      <Stack spacing={2}>
                        <div>1</div>
                        <div>1</div>
                        <div>1</div>
                      </Stack>
                    </Box>
                </main>
            </>
        )
    }
}


export default Home;