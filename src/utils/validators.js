const isEmail = (email) => {
    const regEx = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (email.match(regEx)) return true;
    else return false;
  };

 const isPasswordLength = (string, val) => {

    if (String(string).length < val) return true;
    else return false;
  };

  const isEmpty = (string) => {
    if(!string) return true;
    if (String(string).trim() === '') return true;
    else return false;
  };

  export const validateLoginData = (data) => {
        let errors = {};
      
        if (isEmpty(data.email_address)) errors.email_address = 'Email_address must not be empty';
        if (!isEmail(data.email_address)) errors.email_address = 'Invalid Email Address';
        if (isEmpty(data.password)) errors.password = 'Password must be empty';
        if (isPasswordLength(data.password, 8)) errors.password = 'Password must at least 8 Characters';
        return {
          errors,
          valid: Object.keys(errors).length === 0 ? true : false
        };
      };
    
      