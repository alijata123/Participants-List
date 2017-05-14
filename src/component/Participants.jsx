import React from 'react';



class Participants extends React.Component {

  constructor(props) {
    super(props);

    //  this.state.products = [];
    this.state = {};
    this.state.filterText = "";
    this.state.participants = [
      {
        id: 1,
        location: 'Helsinki',
        email: 'anonymous@hotmail.com',
        number: '0469009313',
        name: 'Lenna Doe'
      }, {
        id: 2,
        location: 'Oulu',
        email: 'JohnDoe@hotmail.com',
        number: '0462343465',
        name: 'John Doe'
      }, {
        id: 3,
        location: 'Tampere',
        email: 'AriDoe@hotmail.com',
        number: '0460084482',
        name: 'Ari Doe'
      }, {
        id: 4,
        location: 'Turku',
        email: 'JaneDoe@outlook.com',
        number: '94588834785',
        name: 'Jane Doe'
      }, {
        id: 5,
        location: 'Lahti',
        email: 'MikaDoe@gmail.com',
        number: '3426653645',
        name: 'Mika Doe'
      }, {
        id: 6,
        location: 'Jounsu',
        email: 'TeijaDoe@outlook.com',
        number: '03405969349',
        name: 'Teija Doe'
      },
        {
        id: 7,
        location: 'Helsinki',
        email: 'HermesDoe@hotmail.com',
        number: '04690848238',
        name: 'Hermes Doe'
      },
        {
        id:8,
        location: 'Lohja',
        email: 'AndyDoe@gmail.com',
        number: '0034449923',
        name: 'Andy Doe'
      },
        {
        id: 9,
        location: 'Espoo',
        email: 'anonymous@hotmail.com',
        number: '0469009313',
        name: 'anonymous'
      },
        {
        id: 10,
        location: 'Kokkola',
        email: 'anonymous@hotmail.com',
        number: '460994432',
        name: 'Linda Poles'
      },
        {
        id: 11,
        location: 'Mikkeli',
        email: 'anonymous@hotmail.com',
        number: '4456345464',
        name: 'anonymous'
      },
        {
        id: 12,
        location: 'Savonlinna',
        email: 'anonymous@hotmail.com',
        number: '45645758557',
        name: 'anonymous'
      },
        {
        id: 13,
        location: 'Hämeenlinna',
        email: 'anonymous@hotmail.com',
        number: '5474758454',
        name: 'anonymous'
      },
        {
        id: 14,
        location: 'Porvo',
        email: 'anonymous@hotmail.com',
        number: '45634345366',
        name: 'anonymous'
      },
        {
        id: 15,
        location: 'Oulu',
        email: 'anonymous@hotmail.com',
        number: '34576888796',
        name: 'anonymous'
      },
        {
        id: 16,
        location: 'Rovaniemi',
        email: 'anonymous@hotmail.com',
        number: '3434350087',
        name: 'anonymous'
      },
        {
        id: 17,
        location: 'Helsinki',
        email: 'anonymous@hotmail.com',
        number: '8076564563',
        name: 'anonymous'
      },
        {
        id: 18,
        location: 'Vassa',
        email: 'anonymous@hotmail.com',
        number: '086786507',
        name: 'anonymous'
      },
        {
        id: 19,
        location: 'Tampere',
        email: 'anonymous@hotmail.com',
        number: '0787634536',
        name: 'anonymous'
      },
        {
        id: 20,
        location: 'Vantaa',
        email: 'anonymous@hotmail.com',
        number: '898095656464',
        name: 'anonymous'
      },

    ];

  }

  handleRowDel(participant) {
    var index = this.state.participants.indexOf(participant);
    this.state.participants.splice(index, 1);
    this.setState(this.state.participants);
  };

  handleAddEvent(evt) {
    var id = (+ new Date() + Math.floor(Math.random() * 999999)).toString(36);
    var participant = {
      id: id,
      name: "",
      email: "",
      location: "",
      number: 358
    }

    console.log("button clicket");
    this.state.participants.push(participant);
    this.setState(this.state.participants);

  }

  handleParticipantTable(evt) {
    var item = {
      id: evt.target.id,
      name: evt.target.name,
      value: evt.target.value
    };
    var participants = this.state.participants;

    var newParticipants = participants.map(function(participant) {
      for (var key in participant) {
        if (key == item.name && participant.id == item.id) {
          //  console.log("inside mao");
          //   console.log(product);
          participant.id = item.id;
          participant[key] = item.value;

        }
      }
      return participant;
    });
    this.setState(newParticipants);
    console.log(this.state.participants);
  };
  render() {

    return (
      <div>
        <ParticipantTable onParticipantTableUpdate={this.handleParticipantTable.bind(this)} onRowAdd={this.handleAddEvent.bind(this)} onRowDel={this.handleRowDel.bind(this)} participants={this.state.participants} filterText={this.state.filterText}/>
      </div>
    );
  }

}


class ParticipantTable extends React.Component {

  render() {
    var onParticipantTableUpdate = this.props.onParticipantTableUpdate;
    var rowDel = this.props.onRowDel;
    var filterText = this.props.filterText;
    var participant = this.props.participants.map(function(participant) {
      if (participant.name.indexOf(filterText) === -1) {
        return;
      }
      return (<ParticipantRow onParticipantTableUpdate={onParticipantTableUpdate} participant={participant} onDelEvent={rowDel.bind(this)} key={participant.id}/>)
    });
    return (
      <div>
      <button type="button" onClick={this.props.onRowAdd} className="btn btn-success pull-right">Add New</button>
        <table className="table table-bordered">
          <thead>
            <tr>
              <th>Name</th>
              <th>E-mail</th>
              <th>Phone-Number</th>
              <th>Location</th>
            </tr>
          </thead>

          <tbody>
            {participant}

          </tbody>

        </table>
      </div>
    );

  }

}

class ParticipantRow extends React.Component {
  onDelEvent() {
    this.props.onDelEvent(this.props.participant);

  }
  render() {

    return (
      <tr className="eachRow">
        <EditableCell onParticipantTableUpdate={this.props.onParticipantTableUpdate} cellData={{
          "type": "name",
          value: this.props.participant.name,
          id: this.props.participant.id
        }}/>
        <EditableCell onParticipantTableUpdate={this.props.onParticipantTableUpdate} cellData={{
          type: "email",
          value: this.props.participant.email,
          id: this.props.participant.id
        }}/>
        <EditableCell onParticipantTableUpdate={this.props.onParticipantTableUpdate} cellData={{
          type: "number",
          value: this.props.participant.number,
          id: this.props.participant.id
        }}/>
        <EditableCell onParticipantTableUpdate={this.props.onParticipantTableUpdate} cellData={{
          type: "location",
          value: this.props.participant.location,
          id: this.props.participant.id
        }}/>
        <td className="del-cell">
          <input type="button" onClick={this.onDelEvent.bind(this)} value="X" className="del-btn"/>
        </td>
      </tr>
    );

  }

}
class EditableCell extends React.Component {

  render() {
    return (
      <td>
        <input type='text' name={this.props.cellData.type} id={this.props.cellData.id} value={this.props.cellData.value} onChange={this.props.onParticipantTableUpdate}/>
      </td>
    );

  }

}



export default Participants;
