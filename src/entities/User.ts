// I choose `User` because it's generic
import cuid from 'cuid';

export interface UserProps {
  id?: string;
  name: string;
  createdAt: Date;
}

export class User {
  constructor(private props: UserProps) {
    this.props = props;

    if (!this.props.id) {
      this.props.id = cuid();
    }

    if (!this.props.name) {
      throw {
        name: 'Error with name',
        message: 'You must provide a name',
      };
    }

    if (this.props.createdAt > new Date()) {
      throw {
        name: 'Error with createdAt',
        message: 'You must provide a valid date',
      };
    }
  }

  get id() {
    return this.props.id;
  }

  get name() {
    return this.props.name;
  }

  get createdAt() {
    return this.props.createdAt;
  }
}
