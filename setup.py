# coding: utf-8

import os

from setuptools import setup


__here__ = os.path.abspath(os.path.dirname(__file__))


def split_requirements(lines):
    requirements, dependencies = [], []

    for line in lines:
        if line.startswith('-e'):
            line = line.split(' ', 1)[1]
            dependencies.append(line)
            line = line.split('#egg=', 1)[1]

        requirements.append(line)

    return requirements, dependencies


with open(os.path.join(__here__, 'requirements', 'dist.txt')) as f:
    REQUIREMENTS = [x.strip() for x in f]
    REQUIREMENTS = [x for x in REQUIREMENTS if x and not x.startswith('#')]
    REQUIREMENTS, DEPENDENCIES = split_requirements(REQUIREMENTS)

README = open(os.path.join(__here__, 'README.rst')).read()


setup(
    name='il2fb-ds-config',
    version='1.0.0.dev0',
    description='Library for working with settings of IL-2 FB Dedicated Server',
    long_description=README,
    keywords=[
        'il2', 'il-2', 'fb', 'forgotten battles', 'server', 'dedicated',
        'config', 'settings',
    ],
    license='LGPLv3',
    url='https://github.com/IL2HorusTeam/il2fb-ds-config',
    author='Alexander Oblovatniy',
    author_email='oblovatniy@gmail.com',
    namespace_packages=[
        'il2fb',
        'il2fb.config',
    ],
    packages=[
        'il2fb.config.ds',
    ],
    include_package_data=False,
    zip_safe=False,
    install_requires=REQUIREMENTS,
    dependency_links=DEPENDENCIES,
    classifiers=[
        'Development Status :: 3 - Alpha',
        'Intended Audience :: Developers',
        'License :: OSI Approved :: GNU Lesser General Public License v3 (LGPLv3)',
        'Natural Language :: English',
        'Operating System :: OS Independent',
        'Programming Language :: Python :: 2.7',
        'Programming Language :: Python :: 3.4',
        'Programming Language :: Python :: 3.5',
        'Topic :: Software Development :: Libraries',
    ],
    platforms=[
        'any',
    ],
    scripts=[
    ],
)
