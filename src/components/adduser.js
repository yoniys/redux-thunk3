import React from 'react';
import Button from '@material-ui/core/Button';
import { ValidatorForm, TextValidator } from 'react-material-ui-form-validator';
import { connect } from 'react-redux'
import { fetchUsers,addUser } from '../redux/user/userActions'

 class SimpleFormExample extends React.Component {
    state = {
        formData: {
            email: '',
            name: '',
            age:''
        },
        submitted: false,
    }

    handleChange = (event) => {
        const { formData } = this.state;
        formData[event.target.name] = event.target.value;
        this.setState({ formData });
    }

    handleSubmit = () => {
        this.setState({ submitted: true }, () => {
            this.props.addUser(this.state.formData.name,this.state.formData.age,this.state.formData.email)
            setTimeout(() => this.setState({ submitted: false }), 5000);
        });
    }

    render() {
        const { formData, submitted } = this.state;
        return (
            <ValidatorForm
                ref="form"
                onSubmit={this.handleSubmit}
            >
                <h2>add user</h2>
                <TextValidator
                    label="name"
                    onChange={this.handleChange}
                    name="name"
                    value={formData.name}
                    validators={['required']}
                    errorMessages={['this field is required']}
                />
                <br />
                <TextValidator
                    label="age"
                    onChange={this.handleChange}
                    name="age"
                    value={formData.age}
                    validators={['required', 'isNumber']}
                    errorMessages={['this field is required', 'age is not valid']}
                />
                <br />
                <TextValidator
                    label="Email"
                    onChange={this.handleChange}
                    name="email"
                    value={formData.email}
                    validators={['required', 'isEmail']}
                    errorMessages={['this field is required', 'email is not valid']}
                />
                <br />
           
                <Button
                    color="secondary"
                    variant="contained"
                    type="submit"
                    disabled={submitted}
             
                >
                    {
                        (submitted && 'Your user is submitted!')
                        || (!submitted && 'Submit')
                    }
                </Button>
            </ValidatorForm>
        );
    }
}


const mapStateToProps = state => {
    return {
      userData: state.user
    }
  }  
  const mapDispatchToProps = dispatch => {
    return {
      fetchUsers: () => dispatch(fetchUsers()),
      addUser: (name,age,email) => {
        dispatch(addUser(name,age,email));
      },
    }
  }
  
  export default connect(
    mapStateToProps,
    mapDispatchToProps
  )(SimpleFormExample)