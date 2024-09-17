# .  	First Boot netboot.xyz Debian

Here's an **ultimate guide to using Netboot.xyz on Linux**:

### Introduction
**Netboot.xyz** is a network boot tool that allows you to load various operating system installers and utilities over the internet, without the need for physical media. You can boot directly into installation environments like Ubuntu, Debian, Arch Linux, and more.

### Prerequisites
- A Linux machine (as the PXE server)
- A network that supports PXE booting
- A target machine to boot from the network
- Internet connection (Netboot.xyz pulls OS installers over the web)
- Basic understanding of networking, DHCP, and TFTP

### Step-by-Step Guide

#### 1. Install Necessary Packages
You need a **TFTP server** and a **DHCP server** to make your Linux machine a PXE server.

On Ubuntu/Debian:
```bash
sudo apt update
sudo apt install isc-dhcp-server tftpd-hpa dnsmasq
```

On Arch Linux:
```bash
sudo pacman -S dnsmasq tftp-hpa
## comando y config continued in 
	## checar #00012 (read no follow)
```

#### 2. Configure DHCP for PXE Booting

You need to set up the DHCP server to point the client to the TFTP server, which will host the `netboot.xyz` files.

Edit `/etc/dhcp/dhcpd.conf`:
```bash
subnet 192.168.1.0 netmask 255.255.255.0 {
  range 192.168.1.100 192.168.1.200;
  option routers 192.168.1.1;
  option domain-name-servers 192.168.1.1;
  filename "pxelinux.0";
  next-server 192.168.1.10;  # Your PXE server's IP
}
```

#### 3. Configure TFTP Server

Next, configure the TFTP server to serve the `netboot.xyz` images.

For `tftpd-hpa`, modify `/etc/default/tftpd-hpa`:
```bash
TFTP_USERNAME="tftp"
TFTP_DIRECTORY="/var/lib/tftpboot"
TFTP_ADDRESS="0.0.0.0:69"
TFTP_OPTIONS="--secure"
```

Create the TFTP directory:
```bash
sudo mkdir -p /var/lib/tftpboot
```

#### 4. Download the Netboot.xyz Files

Go to the [official Netboot.xyz releases page](https://github.com/netbootxyz/netboot.xyz/releases) and download the latest version of `netboot.xyz`.

```bash
wget https://boot.netboot.xyz/ipxe/netboot.xyz-undionly.kpxe
wget https://boot.netboot.xyz/ipxe/netboot.xyz.iso
```

Move the PXE file to the TFTP directory:
```bash
sudo mv netboot.xyz-undionly.kpxe /var/lib/tftpboot/
```

#### 5. Start the Services
Enable and start the services:
```bash
sudo systemctl enable --now isc-dhcp-server
sudo systemctl enable --now tftpd-hpa
```

#### 6. Boot the Target Machine
1. Boot the target machine into the BIOS or UEFI settings and configure it to boot from the network (PXE Boot).
2. The machine should pull the `netboot.xyz` bootloader from your PXE server, and from there you can select any operating system or utility to load over the network.

### Optional: Automating Installation with Kickstart/Preseed
To automate OS installations, you can use tools like **Kickstart (for Red Hat-based distros)** or **Preseed (for Debian-based distros)**. Create a configuration file that specifies installation settings and point your Netboot.xyz session to that file.

### Final Tips
- **Wi-Fi Setup**: Netboot.xyz typically requires a wired connection for PXE booting. However, you can use tools like iPXE scripts to configure Wi-Fi booting.
- **Customization**: You can modify the Netboot.xyz menu and scripts to include your own custom ISOs and tools.

Let me know if you need more details on any section!