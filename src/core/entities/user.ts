import cuid from 'cuid';

interface UserProps {
  id?: string
  name: string
}

export class User {
  private props: UserProps;

  constructor(props: UserProps) {
    this.props = props;

    if (!this.props.id) {
      this.props.id = cuid();
    }
  }

  get id() {
    return this.props.id;
  }

  get name() {
    return this.props.name;
  }
}
