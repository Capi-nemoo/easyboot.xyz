## Inspiration

The inspiration behind **EasyBoot.xyz** came from wanting to make Linux installation way easier, both for regular users and companies managing tons of servers. We wanted to create a solution that makes installing and customizing Linux super accessible, sharing our love for this amazing kernel with more people.

## What it does

**EasyBoot.xyz** aims to automate the process of creating and installing custom ISO images, allowing users to deploy operating systems with pre-configured setups. The project integrates tools like **Netboot.xyz**, **iPXE**, and i**Ventoy**, and even lets you virtualize routers using **pFsense**. While we didn’t get everything fully functional, we made solid progress in setting up a PXE boot server and integrating virtualization and automation through **Ansible**.

## How we built it

We built the project using **Node.js** for the backend and **JavaScript** for the frontend. For system deployment and automation, we used **Netboot.xyz**, **iPXE**, **Docker**, and **Ansible**. One of the more frustrating parts was that the backend, which was added by my teammates before they bailed, had no documentation whatsoever. So I had to write all of that on my own while juggling network issues. The biggest challenge was setting up the DHCP server and automating OS installations with custom scripts.

## Challenges we ran into

The biggest challenge was getting the PXE server and network to work smoothly. Setting up **pFsense**, learning how to use **Ansible**, and understanding the details of protocols like **iPXE** was tough. To make things worse, I had to deal with teammates who dropped out when things got hard. Both of them left after 16 - 19. Having to handle most of the workload alone was definitely frustrating.

## Accomplishments that we're proud of

Despite everything, I’m proud of the functional frontend we managed to build and the fact that I learned so much new tech like **pFsense** and **Ansible** in such a short time. One of the biggest wins was getting **pFsense**—a system built by our FreeBSD brothers—up and running. That really gave me the motivation to keep going, knowing I was taking on something complex and meaningful.

## What we learned

I learned that cutting down the scope of the project is crucial when time and resources are limited. On the teamwork side, it became obvious that having teammates who aren’t fully committed can really drag things down. On the technical side, I leveled up in networking, deployment automation, and system virtualization, which was a big plus.

## What's next for EasyBoot.xyz

The next step for **EasyBoot.xyz** is to finish what we started by improving stability and implementing the missing features. My ultimate goal is to fully automate the deployment of custom Linux distributions and create a tool that not only helps power users but also opens the door for more people to experience just how amazing Linux really is.

### Next Steps...

1. Finish automating the PXE server.
2. Fully integrate Ansible for automation.
3. Improve the user interface.
4. Add customization options for ISOs.
5. Fix network and DHCP issues.