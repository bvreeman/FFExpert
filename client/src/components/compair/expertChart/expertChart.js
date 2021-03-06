import React , { Component } from 'react';


class ExpertChart extends Component {

    state = {
        expert : []
    }

    componentDidMount(){
       let filtersUsers  = this.filterUserVotedata(this.props.expert);

       this.setState({expert: filtersUsers});
    }
    /**
     * This loops though user list and consolidates the all the vote data to only contain the this vote.
     */
    filterUserVotedata = (users) =>{
         const userList = users.map((user) => {
            let currentVote = user.openVotes.filter( (vote) => vote.compairsonID === this.props.compairsonID);
            user.openVotes = currentVote;
            return user;
             })

        return userList    
    }

 

    render(){
        return (
            <div>
                   
                    <table>
                        <thead>
                            <tr>
                                <th>Tag</th>
                                <th>UserName</th>
                                <th>Rank</th>
                                <th>Vote</th>
                                <th>Reason</th>
                            </tr> 
                        </thead>
                        <tbody>
                        {this.props.expert.map((expert, index) => <tr key={`row-${index}`}> <td> <img width="30" alt='user thumbnail' src="https://vignette.wikia.nocookie.net/sote-rp/images/c/c4/User-placeholder.png/revision/latest?cb=20150624004222" /> </td> <td >{expert.username}</td><td  >{expert.rankPoints.week}</td><td  >{expert.openVotes[0].vote}</td><td>{expert.openVotes[0].comment}</td></tr>)}
                        </tbody>   
                    </table>    
            </div>    
        )
    }
}

export default ExpertChart;