# -*- coding: utf-8 -*-

import os

from setuptools import setup


__here__ = os.path.abspath(os.path.dirname(__file__))

README = open(os.path.join(__here__, 'README.rst')).read()
REQUIREMENTS = [
    i.strip()
    for i in
    open(os.path.join(__here__, 'requirements', 'dist.txt')).readlines()
]

# Get VERSION
version_file = os.path.join('il2fb', 'ds', 'config', 'version.py')
# Use exec for compabibility with Python 3
exec(open(version_file).read())

setup(
    name='il2fb-ds-config',
    version=globals()['VERSION'],
    description='Library for working with settings of IL-2 FB Dedicated Server',
    long_description=README,
    keywords=[
        'il2', 'il-2', 'fb', 'forgotten battles', 'server', 'dedicated',
        'config', 'settings',
    ],
    classifiers=[
        'Development Status :: 3 - Alpha',
        'Intended Audience :: Developers',
        'License :: OSI Approved :: GNU Lesser General Public License v3 (LGPLv3)',
        'Natural Language :: English',
        'Operating System :: OS Independent',
        'Programming Language :: Python :: 2.6',
        'Programming Language :: Python :: 2.7',
        'Programming Language :: Python :: 3.3',
        'Programming Language :: Python :: 3.4',
        'Topic :: Software Development :: Libraries',
    ],
    url='https://github.com/IL2HorusTeam/il2fb-ds-config',
    author='Alexander Oblovatniy',
    author_email='oblovatniy@gmail.com',
    license='LGPLv3',
    packages=[
        'il2fb.ds.config',
    ],
    namespace_packages=[
        'il2fb',
        'il2fb.ds',
    ],
    scripts=[
    ],
    platforms=[
        'any',
    ],
    include_package_data=False,
    install_requires=REQUIREMENTS,
    zip_safe=False,
)
