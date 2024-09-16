#!/bin/bash

# Root directory for your PXE setup
ROOT_DIR="/opt/pxe_wifi"

# Create directory structure
mkdir -p ${ROOT_DIR}/bootfiles
mkdir -p ${ROOT_DIR}/images
mkdir -p ${ROOT_DIR}/logs
mkdir -p ${ROOT_DIR}/config
mkdir -p ${ROOT_DIR}/scripts
mkdir -p ${ROOT_DIR}/wifi

# Subdirectories for different file types
mkdir -p ${ROOT_DIR}/bootfiles/kernel
mkdir -p ${ROOT_DIR}/bootfiles/initrd
mkdir -p ${ROOT_DIR}/bootfiles/ipxe

# Subdirectories for OS images
mkdir -p ${ROOT_DIR}/images/ubuntu
mkdir -p ${ROOT_DIR}/images/archlinux
mkdir -p ${ROOT_DIR}/images/centos

# Subdirectories for custom scripts
mkdir -p ${ROOT_DIR}/scripts/ipxe
mkdir -p ${ROOT_DIR}/scripts/preseed
mkdir -p ${ROOT_DIR}/scripts/kickstart

# Directory for Wi-Fi network configurations
mkdir -p ${ROOT_DIR}/wifi/configs
mkdir -p ${ROOT_DIR}/wifi/drivers

# Create example configuration files
cat <<EOL > ${ROOT_DIR}/config/pxe_config.cfg
# General PXE configuration
# Add your network and iPXE options here

EOL

cat <<EOL > ${ROOT_DIR}/scripts/ipxe/boot.ipxe
#!ipxe
# iPXE boot script
dhcp
set base-url http://<YOUR_SERVER>/images
kernel \${base-url}/kernel
initrd \${base-url}/initrd
boot
EOL

cat <<EOL > ${ROOT_DIR}/wifi/configs/wifi.conf
# Wi-Fi network configuration
SSID="yourwifi"
PASSWORD="yourpassword"
EOL

echo "PXE over Wi-Fi directory structure created at ${ROOT_DIR}"

