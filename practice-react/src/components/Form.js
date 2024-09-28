import { Button } from "./Button";
import { Input } from "./Input";

export const Form = ({
  name,
  email,
  onHandleSubmit,
  onChangeName,
  onChangeEmail,
  buttonText,
}) => {
  return (
    <form onSubmit={onHandleSubmit}>
      <div className="p-4 flex w-1/3 justify-center flex-col">
        <label htmlFor="name" className="font-bold text-gray-800">
          Name:
        </label>
        <Input
          type="text"
          id="name"
          placeholder="Enter Your Name"
          value={name}
          onChange={onChangeName}
        />
      </div>
      <div className="p-4 flex w-1/3 justify-center flex-col">
        <label htmlFor="Email" className="font-bold text-gray-800">
          Email:
        </label>
        <Input
          type="email"
          id="Email"
          placeholder="Enter Your Email"
          value={email}
          onChange={onChangeEmail}
        />
      </div>
      <div className="p-4">
        <Button>{buttonText}</Button>
      </div>
    </form>
  );
};
