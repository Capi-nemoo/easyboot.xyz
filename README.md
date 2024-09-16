# Welcome to EasyBoot.xyz

First of all, a huge thank you to everyone who showed interest in **EasyBoot.xyz** during HackWest 2024! It was incredibly motivating to hear from so many of you who loved the concept and are excited to try it out or contribute. While the project is still in early development, I'm working hard to implement all the core features, and your support means a lot. 

If you're interested in contributing, testing, or just following the progress, feel free to explore the repo, submit issues, or open a pull request. I can't wait to see where this project goes with the help of the amazing open-source community!

## EasyBoot.xyz

EasyBoot.xyz aims to simplify the process of creating and installing custom Linux distributions, automating deployment via PXE boot and virtualization. The project integrates tools like **Netboot.xyz**, **iPXE**, and **Ventoy** to offer easy customization and installation options for both individual users and large-scale deployments.

## Features
- PXE boot server for automated OS deployment.
- Custom ISO creation and deployment with **Ventoy**.
- Basic web interface for customization and control.

## Installation

### Prerequisites
To set up **EasyBoot.xyz**, you'll need the following tools installed on your system:
- **Node.js** ()
- **npm** (for package management)
- **Docker** (for containerized services)
- **Netboot.xyz** (for PXE booting)
- **pFsense** (Partially implemented)

### Steps

1. Clone the repository:
    ```bash
    git clone https://github.com/your-username/EasyBoot.xyz.git
    cd EasyBoot.xyz
    ```

2. Install backend dependencies:
    ```bash
    cd backend
    npm install
    ```

3. Set up Docker for containerized services:
    ```bash
    sudo docker-compose up
    ```

4. Configure **Netboot.xyz**:
    - Follow the instructions in the `netboot-setup/` folder for configuring **Netboot.xyz** on your network.

5. Set up **pFsense** (Partially implemented):
    - Ensure **pFsense** is installed and configured. Documentation can be found [here](https://www.pfsense.org/docs/).

> **Note**: **Ansible** is not yet implemented.

## Usage

1. Start the application:
    ```bash
    npm start
    ```

2. Access the web interface at `http://localhost:3000`. From here, you can configure the deployment options, including:
    - Custom ISO selection.
    - Pre-configured settings for automated installations.

## Development

### Project Structure
- **/backend**: Node.js backend for managing the web interface and API calls.
- **/frontend**: Web interface built with JavaScript and some basic HTML/CSS.
- **/docker**: Docker configurations for various containerized services.
- **/netboot-setup**: Configuration files for **Netboot.xyz**.

#### Not Yet Implemented:
- **/ansible**: Ansible playbooks for system configurations.
- **/pfsense**: Router virtualization setup.




### To Do

- [ ] Finish automating the PXE server setup.
- [ ] Improve the web interface for easier use.
- [ ] Add customization options for ISO installations.
- [ ] Fully integrate Ansible (Not implemented yet).
- [ ] Fix networking and DHCP issues.

### Contributing

Feel free to contribute to the project by submitting issues or pull requests. Please follow the contribution guidelines.

## License
This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

## Contact
For questions or collaboration, feel free to reach out via email or open an issue in the repository.
